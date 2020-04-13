// IDK
var value = 0;
var num = 1;
var text, e; // text: display | e: <br> element

////////// ALL INIT ////////////
// INIT: Display Evens BTN
var btnDisplay = document.getElementById("btnDisplay");

// INIT: Display the values in sentence when BTN pressed
var a = document.querySelector(".a");
var b = document.querySelector(".b");
var c = document.querySelector(".c");

// INIT: RESET BUTTON
var reset = document.getElementById("reset");

// INIT: DISPLAYS EVEN VALUES WHEN BTN PRESSED
var disEvens = document.getElementById("disEvens");

////////// EVENT LISTENERS ////////////
// Display Evens
btnDisplay.addEventListener('click', function ALL() {
    displayEvens();
});
// Reset
reset.addEventListener('click', function AGAIN() {
    window.location.reload(true);
});



// EXE: 2
function displayEvens() {
    console.log("Clearing...");
    clearDisplay();
    console.log("startNum: " + Number(document.getElementById("startNum").value));
    console.log("endNum: " + Number(document.getElementById("endNum").value));
    console.log("step: " + Number(document.getElementById("step").value));
        if (startNum > endNum) {
            alert("Your starting number has to be less than the ending number!");
        } else {
            a.innerHTML = Number(document.getElementById("startNum").value);
            b.innerHTML = Number(document.getElementById("endNum").value);
            c.innerHTML = Number(document.getElementById("step").value);
            document.querySelector(".decor").style.backgroundImage = "url('ASSETS/IMG/VillainousEvenAfricanharrierhawk-size_restricted.gif')";
        themeChange();
            setTimeout(displayEvens1, 1000);
            fucksake();
    }
}

// EXE: 3
function fucksake() {
    console.log("startNum with step");
    // logic
    var math1 = Number(document.getElementById("startNum").value);
    console.log("startNum: " + math1);

    // should execute thrice only
    for (var i = 0; i < 3; i++) {
        // finds evens
        // logic
        while (math1 < Number(document.getElementById("endNum").value)) {
            console.log(math1);
            // logic
            math1 += Number(document.getElementById("step").value); // 6 times
            var checkDis = math1 % 2;
            if (checkDis == 0 && math1 < Number(document.getElementById("endNum").value)) {
                // display
                text = document.createTextNode(math1);
                e = document.createElement("br");
                disEvens.appendChild(text);
                disEvens.appendChild(e);
            } else {}
        }
    }
    document.querySelector(".theAnswer").style.display = "inline";
}

function clearDisplay() {
    // clears display
    disEvens.innerHTML = "";
}

function inputNum() {
    if (document.getElementById("startNum").value === String) {
        alert("You must input a number.");
    }
}

// quick background change
function displayEvens1() {
    document.querySelector(".decor").style.backgroundImage = "none";
}
function themeChange() {
    document.querySelector(".display").style.color = "#ADFF2F";
}