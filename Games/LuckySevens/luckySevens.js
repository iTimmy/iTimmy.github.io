var rollCounts = 0;
var winValue = 0;
var valueMoney = 0;
var playPlay = document.querySelector(".PLAY-PLAY");
var betMoney = document.querySelector(".BET-MONEY");
var cashMoney = 0;
var myMoney = document.querySelector(".CASH");

cashMoney = parseInt(cashMoney);

var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");

playPlay.addEventListener('click', ALL);
   

function ALL() {
    play();
}

document.body.style.backgroundImage = "url('1527785749.jpeg')"; 

function rollDice() {
    document.getElementById("rollDie").setAttribute("src") = "ElatedImpartialArmadillo-small.gif"
}

function dumb() {
     document.body.style.backgroundImage = "url('1527785749.jpeg')";
}

function play() {
// How much do you want to bet?

    // Money or NO money?
    if (betMoney.value > cashMoney) {
        betMoney.style.boxShadow = "0px 1px 10px red";
        console.log("You do not have enough cash.");
        alert("You do not have enough cash.");
    } else {
        console.log("Let's begin.")
        betMoney.style.boxShadow = "0px 1px 10px blue";
        rollDie();
        //style
        document.body.style.backgroundImage = "url('giphy.gif')";
        setTimeout(dumb, 1000);
    }
}

// Luck/Chance
function rollDie() {
    var action = document.querySelector(".action");
    var narrate = document.querySelector(".narrate");

    var dieRoll1 = Math.round(Math.random(1, 6) * 5);
    console.log(dieRoll1);
    var dieRoll2 = Math.round(Math.random(1, 6) * 5);
    console.log(dieRoll2);

    action.innerHTML = dieRoll1 + ", " + dieRoll2;

    // Did you lose or win?
    if (dieRoll1 + dieRoll2 == 7) {
        console.log("You earned some cash.");
        cashMoney += 4;
        cashMoney.innerHTML += cashMoney;
        winValue++;
        valueMoney += cashMoney;
        // style
        narrate.style.color = "green";
        narrate.innerHTML = "You earned some cash."
        myMoney.style.color = "green";
    } else if (dieRoll1 + dieRoll2 != 7 && cashMoney == 0) {
        console.log("Didn't gain.");
        // style
        narrate.style.color = "yellow";
        narrate.innerHTML = "Didn't gain."
        myMoney.style.color = "yellow";
    } else if (dieRoll1 + dieRoll2 != 7) {
        console.log("You lose some cash.");
        cashMoney -= 1;
        cashMoney.innerHTML += cashMoney;
        // style
        narrate.style.color = "red";
        narrate.innerHTML = "You lose some cash."
        myMoney.style.color = "red";
    }
    rollCounts++;
    console.log(rollCounts);


    // table
    myMoney.innerHTML = cashMoney;
    a.innerHTML = betMoney.value;
    b.innerHTML = rollCounts;
    c.innerHTML = parseInt(valueMoney);
    d.innerHTML = winValue;

    document.querySelector("table").style.display = "inline";
}