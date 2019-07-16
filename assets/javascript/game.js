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

    $("#reset").hide();

    $("#start").on("click",function(){
        $("#start")
    })

    














})