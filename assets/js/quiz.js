var timer = document.getElementById("timer");
var startScreen = document.getElementById("startScreen");
var start = document.getElementById("start-button");

var message = ""

var questions = [
    {
        question: "Commonly used data types DO Not Include:",
        answers: {
            1: "strings",
            2: "booleans",
            3: "alerts",
            4: "numbers"
        },
        correctAnswer: 3
    },
    {
        question: "The condition in an if/else statement is encloded with _________.",
        answers: {
            1: "quotes",
            2: "curly brackets",
            3: "parenthesis",
            4: "square brackets"
        },
        correctAnswer: 3
    },
    {
        question: "Arrays in JavaScript can be used to store ________.",
        answers: {
            1: "numbers and strings",
            2: "other arrays",
            3: "booleans",
            4: "all of the above"
        },
        correctAnswer: 4
    },
    {
        question: "String values must be enclosed with ________ when being assigned to variables.",
        answers: {
            1: "commas",
            2: "curly brackets",
            3: "quotes",
            4: "parenthesis"
        },
        correctAnswer: 3
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is",
        answers: {
            1: "JavaScript",
            2: "terminal/bash",
            3: "for loops",
            4: "console.log"
        },
        correctAnswer: 4
    },
];

// create timer //

function countdown() {
    var timeLeft = 75;

    var timeInterval = setInterval(function(){
        if (timeLeft >= 0) {
            timer.textContent = timeLeft;
            timeLeft--;
        } else {
            timer.textContent = "";
            clearInterval(timeInterval);
        }
    }, 1000);
};

function startQuiz() {
    countdown();
    startScreen.remove();
    start.remove();   
}


start.onclick = startQuiz