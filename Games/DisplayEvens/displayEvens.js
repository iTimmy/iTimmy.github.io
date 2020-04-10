var btnDisplay = document.getElementById("btnDisplay");

var startNum = document.getElementById("startNum");
var endNum = document.getElementById("endNum");
var step = document.getElementById("step");

var a = document.querySelector(".a");
var b = document.querySelector(".b");
var c = document.querySelector(".c");

var num = 1;

var reset = document.getElementById("reset");

var disEvens = document.getElementById("disEvens");
var value = 0;

btnDisplay.addEventListener('click', ALL);
reset.addEventListener('click', AGAIN);


function ALL() {
    displayEvens();
    setTimeout(displayEvens1, 1000);
}


function displayEvens() {
   
        if (startNum.value > endNum.value) {
            alert("Your starting number has to be less than the ending number!");
        } else {
            a.innerHTML = startNum.value;
            b.innerHTML = endNum.value;
            c.innerHTML = step.value;
        }

        document.querySelector(".decor").style.backgroundImage = "url('VillainousEvenAfricanharrierhawk-size_restricted.gif')";
        themeChange();

    //for (var a = 1; a < 4; a++) {
        for (var i = 1; i < endNum.value; i += 2) {
            var ar = [];
            ar[0 + i] = 1;
            ar[ar.length] = i;
            console.log(i);
            console.log(ar);
        }
    //}
    document.querySelector(".theAnswer").style.display = "inline";
}

function displayEvens1() {
    document.querySelector(".decor").style.backgroundImage = "none";
}

function AGAIN() {
    window.location.reload(true);
}

function themeChange() {
    document.querySelector(".display").style.color = "#ADFF2F";
}