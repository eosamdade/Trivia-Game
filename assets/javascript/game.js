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

            $("answerdblock").html("<p>TIMER IS UP! The correct ans is" + drumroll + "</p>");
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





    














})