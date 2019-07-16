$(document).ready(function(){
  
    var options = [
        {
            question:"",
            choice: ["A","B","C","D"],
            answer: 2,
            photo: ""
        },
        {
            question:"",
            choice: ["A","B","C","D"],
            answer: 4,
            photo: ""
        },
        {
            question:"",
            choice: ["A","B","C","D"],
            answer: 2,
            photo: ""
        },
        {
            question:"",
            choice: ["A","B","C","D"],
            answer: 1,
            photo: ""
        },
        {
            question:"",
            choice: ["A","B","C","D"],
            answer: 3,
            photo: ""
        }
    ]
    //my global variables
    var correct = 0;
    var wrong = 0;
    var unaswered = 0;
    var timer = 20;
    var intervalId;
    var userGuess= "";
    var timerunning = false;
    var questionCount = options.length;
    var select;
    var index;
    var newArray = [];
    var holder = [];
    var drumroll = $("myAudio")
    
    //reset game
    $("#reset").hide();
    
    //start game
    $("#start").on("click",function(){
        $("#start").hide();
        displayQuestion();
        runTimer();
        for (var i=0; i<options.length; i++) {
            holder.push(option[i]);
        };

    });

    //time
    function runTimer () {
        if (!running) {
            intervalId = setInterval(decreament,1000)
        };

        running = true;
    };

    function decreament () {
       
        $("#timeleft").html("<h3>TIME REMAINING IS " + timer + "</h3>");
        timer --;

        if (timer === 0) {
            unaswered ++;
            stop();

            $("#answerBlock").html("<p>TIMER IS UP! The correct ans is" + drumroll + "</p>");
            hidepicture();
        };
        
    };

    function drumroll () {
        drumroll.play()
    };

    function stop () {
        running = false;
        clearInterval(intervalId)
    }

    //display questions
    function displayQuestion () {
        index = Math.floor(Math.random()*options.length);
        pick = option[index];

        // console.log(pick);

        $("#questionBlock").html("<h2>" + pick.question + "</h2>");

        //iterate ans and display

        for (var i =0; i < pick.choice.length; i ++ ){
            var userChoice = $("div");
            userChoice.class("answer choice");
            unaswered.html(pick.choice [i]);
            userChoice.attr("dataGuessValue",[i]);
            $("#answerBlock").append(userChoice)
        }
    };

    //click function to selcet ans and outcome
    $(".answerChoice").on("click",function(){
        userGuess =parseInt($(this).attr("dataGuessValue"));

        //correct guess or wrong guesses outcome
        if (userGuess === pick.answer) {
            stop();
            correct++;
            userGuess="";
            $("#answerBlock").html("<p>CORRECT!</p>");
            hidepicture();
        }
        else{
            stop();
            wrong++;
            userGuess="";
            $("#answerBlock").html("<p>WRONG! The correct answer is " +pick.choice[pick.answer] + "</p>");
            hidepicture();
        }
    })   
    
    function hidepicture () {
        $("#answerBlock").append("<img src =" + pick.photo + ">");
        newArray.push(pick);
        option.splice(index,1);

        var hidepic = setTimeout(function(){
            $("#answerBlock").empty();
            timer = 20;
        })

        //score screen

        if ((wrong + correct + unaswered) === questionCount) {
            $("questionBlock").html("<h3> GAME OVER! HERE IS HOW YOU DID : </h3>");
            $("#answerBlock"),append("<h4> CORRECT : " + correct + "</h4>");
            $("#answerBlock"),append("<h4> WRONG : " + wrong + "</h4>");
            $("#answerBlock"),append("<h4> UNANSWERED : " + unaswered + "</h4>");
            $("#reset").show();
            correct = 0;
            wrong = 0;
            unaswered = 0;
        }
        else{
            runTimer();
            displayQuestion();
        }
    }
    
    $("#reset").on("click", function(){
        $("#reset").hide();
        $("#answerBlock").empty();
        for ( var i = 0; i < holder.length; i++){
            options.push(holder[i]);
        }
        runTimer();
        displayQuestion();
    })
    
})