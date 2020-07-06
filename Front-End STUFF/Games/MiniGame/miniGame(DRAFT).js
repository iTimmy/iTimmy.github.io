/*



/////////////////////////////////////////
//////////////// SET UP ////////////////
var answer = document.getElementById("THE-ANSWER");
var CD = document.getElementById("countdown");
var startPlay = document.getElementById("START");
// COUNTDOWN FROM 15
var time;
var value = 0;
var i;
var timeON;
// DECIDES WHETHER TO STOP TIMER OR NOT BASED ON 1(ON) OR 0(OFF)
var ON_OFF = 1;

startPlay.addEventListener('click', ALL);

function ALL() {
    starting();
    TIMER();
}

function TIMER() {
    time = 10 + value;

    display(time);
    timeON = setInterval(function() {
        if (time <= 0) {
            time = 0;
            clearInterval(timeON);
            console.log("Moving onto LVL 2...");
            nextLVL_time();
        }
        CD.innerHTML = time;
        time -= 1;
        display(time);
        }, 1000)
}

function display(time) {
    console.log(time);
}

function starting() {
    CD.innerHTML = "STARTING COUNTDOWN";
    CD.style.color = "red";
    CD.style.boxShadow = "0px 1px 20px red";
}

function nextLVL_time() {
    value += 10;
    console.log("LVL2 Fetched");
    TIMER();
}




function TIMER() {
    value = 16;

    for (i = 0; i < 1; i++) {
          value--;
      }
      CD.innerHTML = value;
  }

/////////////////////////////////////////
////////TIMER: BEHIND THE SCENES ///////


/*
// MAIN METHOD THAT EXECUTES THE TIMER
updateUPDATE();
}

// UPDATES/CHECKS CONDITIONS
function updateUPDATE() {
ON_OFF_method();
}

/*
// T/F COUNTER START/STOP
// as long as ON_OFF variable is 1, this method will execute
function ON_OFF_method() {
    if (ON_OFF == 1) {
        value = 11;
        setInterval(TIMER1, 1000);
    } else if (ON_OFF == 2) {
        value = 16;
        setInterval(TIMER2, 1000);
    } else if (ON_OFF == 3) {
        value = 31;
        setInterval(TIMER3, 1000);
    } 
} */

/*
// ACTIVE COUNTDOWN
// at every sec, this method gets called again & again
function TIMER1() {
    if (value > 6) {
        CD.style.color = "white";
        CD.style.boxShadow = "0px 1px 20px white";
    }

    if (value <= 6 && value >= 4) {
        CD.style.color = "yellow";
        CD.style.boxShadow = "0px 1px 20px yellow";
    }

    if (value <= 4 && value >= 1) {
        CD.style.color = "red";
        CD.style.boxShadow = "0px 1px 20px red";
    }

    if (value == 1) {
        CD.style.color = "grey";
        CD.style.boxShadow = "0px 1px 20px grey";
    }

    for (var i = 0; i < 1; i++) {
        value--;
        console.log(value);
    }

    if (ON_OFF == 1) {
    CD.innerHTML = value;
    }

    if (value == 0) {
        ON_OFF = 2;
    }

    if (ON_OFF == 2) {
        updateUPDATE();
    }
}




function TIMER2() {
    if (value > 11) {
        CD.style.color = "white";
        CD.style.boxShadow = "0px 1px 20px white";
    }

    if (value <= 11 && value >= 6) {
        CD.style.color = "yellow";
        CD.style.boxShadow = "0px 1px 20px yellow";
    }

    if (value <= 6 && value >= 1) {
        CD.style.color = "red";
        CD.style.boxShadow = "0px 1px 20px red";
    }

    if (value == 1) {
        CD.style.color = "grey";
        CD.style.boxShadow = "0px 1px 20px grey";
    }

    for (i = 0; i < 1; i++) {
        value--;
        console.log(value);
    }
    if (ON_OFF == 2) {
        CD.innerHTML = value;
        }
    
        if (value == 0) {
            ON_OFF = 3;
        }
    
        if (ON_OFF == 3) {
            updateUPDATE();
        }
}













/*

function TIMER3() {
    if (value > 16) {
        CD.style.color = "white";
        CD.style.boxShadow = "0px 1px 20px white";
    }

    if (value <= 16 && value >= 8) {
        CD.style.color = "yellow";
        CD.style.boxShadow = "0px 1px 20px yellow";
    }

    if (value <= 8 && value >= 2) {
        CD.style.color = "red";
        CD.style.boxShadow = "0px 1px 20px red";
    }

    if (value == 1) {
        CD.style.color = "grey";
        CD.style.boxShadow = "0px 1px 20px grey";
    }

    for (i = 0; i < 1; i++) {
        value--;
        console.log(value);
    }
    if (ON_OFF == 3) {
        CD.innerHTML = value;
        }
    
        if (value == 0) {
            ON_OFF = 3;
        }
    
        if (ON_OFF == 3) {
            updateUPDATE();
        }
}
*/




