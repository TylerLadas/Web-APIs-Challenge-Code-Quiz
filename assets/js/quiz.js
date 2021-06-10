var timer = document.getElementById("timer");
var start = document.getElementById("start-button")

var message = ""

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


start.onclick = countdown;