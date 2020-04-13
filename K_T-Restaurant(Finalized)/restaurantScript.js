// TEST
window.addEventListener('scrollTest', test);
function test() {
    const scrollTest = window.scrollY;
    console.log(scrollTest);
}



// HOME
let headerShadow = document.querySelector(".HEADER-SHADOW");
let headerBody = document.querySelector(".HEADER-BODY");
navStick();

window.addEventListener('scroll', navStick);

function navStick() {
    var scroll = window.scrollY;
    if (scroll >= 840) {
        console.log("yes");
        document.querySelector(".RESTAURANT-header").style.position = "fixed";
        document.querySelector(".RESTAURANT-header").style.backgroundColor = "rgba(0, 0, 0)";
    } else if (scroll <= 840) {
        console.log("no");
        document.querySelector(".RESTAURANT-header").style.removeProperty("position");
        document.querySelector(".RESTAURANT-header").style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    }
}

function imgShuffle() {
    console.log("ok");
    setTimeout(action1, 1000);
    setTimeout(action2, 5000);
    setTimeout(action3, 10000);
}

function action1() {
    headerBody.style.backgroundImage = "url('ss1.jpg')";
}
function action2() {
    headerBody.style.backgroundImage = "url('ss2.jpg')";
}
function action3() {
    headerBody.style.backgroundImage = "url('ss3.jpg')";
}
function original() {
    headerBody.style.backgroundImage = "url('home.jpg')";
}

function imgShuffling() {
    var value;
    value = Math.round(Math.random(0, 2) * 2);
    console.log(value);
    var ar = ["url('theme-3.jpg')", "url('board.jpg')", "url('glacier.jpg')", "url('unnamed.jpg')"];
    document.querySelector(".HOME-BODY").style.backgroundImage = ar[value];
}



// MENU
function highlight() {
    console.log("ok");
    document.querySelector('.menuOrder h3').style.textShadow = "0px 2px 10px white";
}
function nohighlight() {
    console.log("okno");
    document.querySelector('.menuOrder h3').style.textShadow = "0px 1px 8px red";
}
function crabScroll() {
    window.scrollTo({
        top: 970, // 1826, 2682, 3538, 4394, 5250
        behavior: 'smooth',
    })
}
function fishScroll() {
    window.scrollTo({
        top: 1826, // 1655, 2340, 3025, 3710, 4395
        behavior: 'smooth',
    })
}
function lobsterScroll() {
    window.scrollTo({
        top: 2682, // 1655, 2340, 3025, 3710, 4395
        behavior: 'smooth',
    })
}
function seaweedScroll() {
    window.scrollTo({
        top: 3552, // 1655, 2340, 3025, 3710, 4395
        behavior: 'smooth',
    })
}
function shrimpScroll() {
    window.scrollTo({
        top: 4394, // 1655, 2340, 3025, 3710, 4395
        behavior: 'smooth',
    })
}
function squidScroll() {
    window.scrollTo({
        top: 5302, // 1655, 2340, 3025, 3710, 4395
        behavior: 'smooth',
    })
}
function navScroll() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

// 