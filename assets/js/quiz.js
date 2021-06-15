// global variables /

var timer = document.getElementById("timer");
var startScreen = document.querySelector(".startScreen")
var startButton = document.getElementById("startButton");
var quizScreen = document.querySelector(".quizScreen");
var questionDisplay = document.getElementById("questionDisplay");
var scoreDisplay = document.getElementById("highScore")
var button0 = document.getElementById("button0");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var gameOver = document.querySelector(".gameOver");
var result = document.getElementById("result");
var finalScore = document.querySelector(".finalScore");
var submitButton = document.getElementById("submit");
var scores = document.getElementById("scores");
var initials = document.getElementById("initials");
var clearButton = document.getElementById("clear");
var header = document.getElementById("header");
var headerScore = document.getElementById("headerScore");
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
        if (timeLeft <= 0 || questionCount === questions.length) {
            timer.textContent = "";
            clearInterval(timeInterval);
            quizScreen.style.display = "none";
            gameOver.style.display = "block";
            finalScore.textContent = timeLeft;
            } else {
            timer.textContent = timeLeft;
            timeLeft--;
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
    } 
};

// submit score to local storage//
function submitScore(event) {
    event.preventDefault();

    header.style.display = "none";
    gameOver.style.display = "none";
    scoreDisplay.style.display = "block";

    var userInitials = initials.value;
    
    let result = {
        name: userInitials, 
        score: timeLeft
    };
    
    if (userInitials ==="") {
        alert ("Please enter your 2 initials!");
        return;
    }
    
    var scoresArray = [];
    scoresArray.push(result);
    var scoresArrayString = JSON.stringify(scoresArray);


    localStorage.setItem("high score", scoresArrayString);
  
    var savedScores = localStorage.getItem("high score");

    if (savedScores === null) {
        return;
    }

    retrievedScores = JSON.parse(savedScores);
 
    //display scores from storage//
    for (i = 0; i < retrievedScores.length; i++) {
        var eachScore = document.createElement("p");
        eachScore.innerHTML = retrievedScores[i].name + " - " + retrievedScores[i].score;       
        scores.appendChild(eachScore);
    }
}


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

// submit buttons //
submitButton.addEventListener("click", submitScore);

//header score link //

headerScore.addEventListener("click", function() {
    header.style.display = "none";
    startScreen.style.display = "none";
    scoreDisplay.style.display = "block";
    var savedScores = localStorage.getItem("high score");

    if (savedScores === null) {
        return;
    }

    retrievedScores = JSON.parse(savedScores);
 
    for (i = 0; i < retrievedScores.length; i++) {
        var eachScore = document.createElement("p");
        eachScore.innerHTML = retrievedScores[i].name + " - " + retrievedScores[i].score;       
        scores.appendChild(eachScore);
    }
});

// clear scores //

clearButton.addEventListener("click", function() {
    localStorage.removeItem("high score");
    scores.innerHTML="";
})
