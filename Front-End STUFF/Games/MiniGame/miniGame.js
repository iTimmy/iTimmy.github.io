// TIMER //
var answer = document.getElementById("THE-ANSWER");
var CD = document.getElementById("countdown");
var startPlay = document.getElementById("START");
var gameOverSection = document.getElementById("game-over");
var resetButton = document.getElementById("reset-button");

var strikeCount = 0;
var strike1 = document.querySelector(".strike1");
var strike2 = document.querySelector(".strike2");
var strike3 = document.querySelector(".strike3");

var lvl = document.getElementById("LEVEL");

var time;
var value = 0;
var color;
var colorValue = 0;
var timeON;

startPlay.addEventListener('click', ALL);

function ALL() {
    starting();
    gameLogic();
    TIMER();
}

function starting() {
    CD.innerHTML = "STARTING COUNTDOWN";
    CD.style.color = "red";
    CD.style.boxShadow = "0px 1px 20px red";
}

// --- THIS IS FOR THE STRIKES! INCOMPLETE --- //
//--------------------------------------------//
var strikeCount = 0;
function strikeDisplay() {
  switch (true) {
    case 0:
      break;
    case (strikeCount === 1):
      console.log("hello");
      strike1.innerText = "❌";
      break;
    case (strikeCount === 2):
      strike2.innerText = "❌";
      break;
    case (strikeCount >= 3):
      strike3.innerText = "❌";
      console.log("Game Over");
      gameOver();
    break;
    default:
      break;
  }
}
//--------------------------------------------//

function TIMER1() {
    clearInterval(timeON);
    time = 0;
    TIMER();
}
// COUNTDOWN TIMER (affected by levels)
function TIMER() {
    time = 10 + value;
    color = 4 + colorValue;

    // If the clock counts down, this setInterval function goes bye-bye
    display(time);
    timeON = setInterval(function() {
        if (time <= 0) {
            time = 0;
            time = 10 + value;
            color = 4 + colorValue;
            // clearInterval(timeON);
        }
    CD.innerHTML = time;
    time -= 1;

    if (time <= 0) {
        score--;
        strikeCount++;
        strikeDisplay();
        gameLogic();
    }

    // TIME RUNNING OUT: Color Changes (W, Y, R, Grey)
    if (time >= color && time <= color + 5) {
        CD.style.color = "white";
        CD.style.boxShadow = "0px 1px 20px white";
    }
    if (time <= color && time > color/2) {
        CD.style.color = "yellow";
        CD.style.boxShadow = "0px 1px 20px yellow";
    }
    if (time <= color/2 - 1) {
        CD.style.color = "red";
        CD.style.boxShadow = "0px 1px 20px red";
    }
    if (time <= 0) {
        CD.style.color = "grey";
        CD.style.boxShadow = "0px 1px 20px grey";
    }
    // This is what makes it in seconds (in our world)
    display(time);
    }, 1000)
}

function display(time) {
    console.log(time);
}

function nextLVL_time() {
    clearInterval(timeON);

    if (time > 28 && time < 32) {
       TIMER();
    }
    if (time != 30) {
        value += 10;
        colorValue += 10;
        console.log("LVL2 Fetched");
        TIMER();
    } // This works at least! We will mesh code!
}

// MATHEMATICS //
//Starting Score
var score = 0;
//Starting Random Number. Will change every loop.
var randomNumberOne;
var randomNumberTwo;
var sum;
var answer;
var theInput = document.getElementById("theInput");
var question = document.getElementById("question");
var showScore = document.getElementById("displayScore");
//Sets randomNumbers and Sums

//Checks score. If right ++, if wrong --, then adds new numbers to game with gameLogic() . We can probably have this on the enter key that way we only need one function.
function checkAnswer() {
  answer = document.getElementById("theInput");
  if (answer.value == sum) {
    theInput.style.removeProperty('opacity');
    theInput.style.boxShadow = "0px 1px 20px green";
    theInput.classList.remove("input-fail");
    theInput.classList.add("input-success");
    score++;
    YAY();
    gameLogic();
  } else if (answer.value != sum) {
    theInput.style.removeProperty('opacity');
    theInput.style.boxShadow = "0px 1px 20px red";
    theInput.classList.remove("input-success");
    theInput.classList.add("input-fail");
    score--;
    strikeCount++;
    strikeDisplay();
    gameLogic();
  }
}
function gameLogic() {
document.getElementById("START").style.opacity = "0";
document.getElementById("LEVEL").style.opacity = "100";
document.querySelector(".score").style.opacity = "100";
theInput.style.opacity = "100";
strike1.style.opacity = "100";
strike2.style.opacity = "100";
strike3.style.opacity = "100";

  if (score <= 3) {
    lvl.innerHTML = 1;
    levelOne();
  } else if (score > 3 && score <= 6) {
    lvl.innerHTML = 2;
    levelTwo();
  } else if (score > 6) {
    lvl.innerHTML = 3;
    levelThree();
  }
}
//Sets random numbers globally and returns * answer of the two
function levelOne() {
    if (console.log("Game Over") != false) {
  randomNumberOne = Math.round(Math.random() * 10);
  randomNumberTwo = Math.round(Math.random() * 10);
  sum = randomNumberOne * randomNumberTwo;
  updatePage();
    }
}
function levelTwo() {
if (console.log("Game Over") != false) {
  randomNumberOne = Math.round(Math.random() * 100);
  randomNumberTwo = Math.round(Math.random() * 100);
  sum = randomNumberOne * randomNumberTwo;
  updatePage();
  console.log("Moving onto LVL 2...");
  nextLVL_time();
}
}
function levelThree() {
    if (console.log("Game Over") != false) {
        randomNumberOne = Math.round(Math.random() * 1000);
        randomNumberTwo = Math.round(Math.random() * 1000);
        sum = randomNumberOne * randomNumberTwo;
        updatePage();
        console.log("Moving onto LVL 3...");
        nextLVL_time();
    }
}
function updatePage() {
  question.innerText = randomNumberOne + " x " + randomNumberTwo;
  showScore.innerText = score;
}
theInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    checkAnswer();
    updatePage();
    document.getElementById("theInput").value = "";
    TIMER1();
  }
});

function YAY () {
  var randomNumberOfConfetti = Math.round(Math.random() * 10);
  var yay = document.querySelector(".confetti");
  yay.innerText = ""
  for (var i = 0; i <= randomNumberOfConfetti; i++) {
    var explosion = document.createTextNode("🎉");
      yay.appendChild(explosion);
  }
}

function gameOver() {
  //clear the screen code
  gameOverSection.innerText = "Game Over! Better luck next time.";
  resetButton.style.display = "block";
  gameOverSection.innerHTML = "<h1>Game Over! Better luck next time.</h1>";
  //reset button
}

