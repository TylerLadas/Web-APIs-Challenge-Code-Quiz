const timer = document.getElementById("timer");
const startScreen = document.getElementById("startScreen");
const startButton = document.getElementById("startButton");
const quizScreen = document.getElementById("quizScreen");
var questionHeader = document.getElementById("questionHeader");
let message = ""
let questionCount = 0;
// creates questions and answers //

var questions = [
    {
        question: "Commonly used data types DO Not Include:",
        answers: [
            "1: strings",
            "2: booleans",
            "3: alerts",
            "4:numbers"
        ],
        correctAnswer: "3"
    },
    {
        question: "The condition in an if/else statement is encloded with _________.",
        answers: [
            "1: quotes",
            "2: curly brackets",
            "3: parenthesis",
            "4: square brackets"
        ],
        correctAnswer: "3"
    },
    {
        question: "Arrays in JavaScript can be used to store ________.",
        answers: [
            "1: numbers and strings",
            "2: other arrays",
            "3: booleans",
            "4: all of the above"
        ],
        correctAnswer: "4"
    },
    {
        question: "String values must be enclosed with ________ when being assigned to variables.",
        answers: [
            "1: commas",
            "2: curly brackets",
            "3: quotes",
            "4: parenthesis"
        ],
        correctAnswer: "3"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is",
        answers: [
            "1: JavaScript",
            "2: terminal/bash",
            "3: for loops",
            "4: console.log"
        ],
        correctAnswer: "4"
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

// add quizbox html elements/
function quizbox() {
    var quizDiv = document.createElement("div");
    quizDiv.className = "quizbox";
    document.body.appendChild(quizDiv);

    
    
    var button1 = document.createElement("button");
    button1.innerText = "";
    buttonDiv.appendChild(button1);

    var button2 = document.createElement("button");
    button2.innerText = "";
    buttonDiv.appendChild(button2);

    var button3 = document.createElement("button");
    button3.innerText = "";
    buttonDiv.appendChild(button3);

    var button4 = document.createElement("button");
    button4.innerText = "";
    buttonDiv.appendChild(button4);

    var result = document.createElement("p");
    result.innerText = "result";
    quizDiv.appendChild(result);        
    
    // initial question selection //
    quizH2.innerText = questions[questionCount].question;
    button1.innerText = questions[questionCount].answers[0];
    button2.innerText = questions[questionCount].answers[1];
    button3.innerText = questions[questionCount].answers[2];
    button4.innerText = questions[questionCount].answers[3];

    button1.onclick = choose0;
    button2.onclick = choose1;
    button3.onclick = choose2;
    button4.onclick = choose3;

// check for correct answer //
function checkAnswer(answer) {
    if (questions[questionCount].correctAnswer === questions[questionCount].choices[answer]) {

    } else {
        timer -= 10;
    }
};

function choose0 () {
    checkAnswer(0);
}
function choose1  () {
    checkAnswer(1);
}
function choose2 () {
    checkAnswer(2);
}
function choose3 () {
    checkAnswer(3);
}
}
// starts quiz //
function startQuiz() {
    countdown();
    startScreen.remove();
    startButton.remove();
    quizbox();   
}


startButton.onclick = startQuiz;
