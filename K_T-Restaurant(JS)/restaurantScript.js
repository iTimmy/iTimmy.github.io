var theHeader = document.getElementsByClassName("HEADER-BODY");
var theButton = document.getElementById('TAKE-ME');
var headerBody = document.querySelector(".HEADER-BODY");
theButton.addEventListener('click', op);

function op() {
        headerBody.style.backgroundImage = "url('seaweed.jpg')";
}



/*
var imgSlide = [];

imgSlide[0] = 'home.jpg';
imgSlide[1] = 'seaweed.jpg';
imgSlide[2] = 'theme-3.jpg';

theHeader.textContent= "ok";

if (theButton.onclick == true) {
    theButton.value = "Hello";
}
*/