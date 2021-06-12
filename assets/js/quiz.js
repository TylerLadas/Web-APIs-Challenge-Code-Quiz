// global variables //
var timer = document.getElementById("timer");
var startButton = document.getElementById("startButton");
var quizScreen = document.querySelector(".quizScreen");
var questionDisplay = document.getElementById("questionDisplay");
var button0 = document.getElementById("button0");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var gameOver = document.querySelector(".gameOver");
var result = document.getElementById("result");
var questionCount = 0;
var timeLeft = 75;

// creates questions and answers array //
var questions = [
    {
        question: "Commonly used data types DO Not Include:",
        answers: [
            "1: strings",
            "2: booleans",
            "3: alerts",
            "4: numbers"
        ],
        correctAnswer: "3: alerts"
    },
    {
        question: "The condition in an if/else statement is encloded with _________.",
        answers: [
            "1: quotes",
            "2: curly brackets",
            "3: parenthesis",
            "4: square brackets"
        ],
        correctAnswer: "3: parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store ________.",
        answers: [
            "1: numbers and strings",
            "2: other arrays",
            "3: booleans",
            "4: all of the above"
        ],
        correctAnswer: "4: all of the above"
    },
    {
        question: "String values must be enclosed with ________ when being assigned to variables.",
        answers: [
            "1: commas",
            "2: curly brackets",
            "3: quotes",
            "4: parenthesis"
        ],
        correctAnswer: "3: quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is",
        answers: [
            "1: JavaScript",
            "2: terminal/bash",
            "3: for loops",
            "4: console.log"
        ],
        correctAnswer: "4: console.log"
    },
];

// create timer //

function countdown() {

    var timeInterval = setInterval(function(){
        if (timeLeft >= 0) {
            timer.textContent = timeLeft;
            timeLeft--;
        } else {
            timer.textContent = "";
            clearInterval(timeInterval);
            quizScreen.style.display = "none";
            gameOver.style.display = "block";
        }
    }, 1000);
};
    
// initial question selection //
function nextQuestion() {
    questionDisplay.innerText = questions[questionCount].question;
    button0.innerText = questions[questionCount].answers[0]; 
    button1.innerText = questions[questionCount].answers[1];
    button2.innerText = questions[questionCount].answers[2];
    button3.innerText = questions[questionCount].answers[3];
};

// check for correct answer //
function choose1() { checkAnswer(0)};
function choose2() { checkAnswer(1)};
function choose3() { checkAnswer(2)};
function choose4() { checkAnswer(3)};

function checkAnswer(choice) {
    if (questions[questionCount].correctAnswer === questions[questionCount].answers[choice]) {
        result.innerText = "Correct!";
    } else {
        result.innerText = "Wrong!";
        timeLeft -= 10;
    }

    questionCount ++;

    if (questionCount < questions.length) {
        nextQuestion();
    } else {
        timer.textContent = "";
        quizScreen.style.display = "none";
        gameOver.style.display = "block";
    }
};


//EVENT LISTENERS//

// when start button clicked //
    // start timer //
    startButton.addEventListener("click", countdown)
    // remove startScreen and show quizScreen //
    startButton.addEventListener("click", function() {
        document.querySelector(".startScreen").style.display = "none";
        quizScreen.style.display = "block";
    })
    // show 1st question //
    startButton.addEventListener("click", nextQuestion);

// answer buttons //
button0.addEventListener("click", choose1);
button1.addEventListener("click", choose2);
button2.addEventListener("click", choose3);
button3.addEventListener("click", choose4);



