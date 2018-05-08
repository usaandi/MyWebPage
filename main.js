window.onload = initAll;
var dotaImages = new Array("Images/dota2sf.jpg",
    "Images/dota2logo.jpg",
    "Images/dota2qop.jpg",
    "Images/dota2rubick.jpg");
var currentImg = 0;

var countDownDate = new Date("Jan 1, 2019, 00:00:00").getTime();

function countdownTimer() {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";
    if (distance < 0) {
        document.getElementById("demo").innerHTML = "Head uut aastat!"
    }
}

function rotate() {
    currentImg++;
    if (currentImg == 4) {
        currentImg = 0;
    }
    var fadeinImage = document.getElementById("imagesBackground").src = dotaImages[currentImg];
}

function initAll() {
    setInterval("rotate()", 10000);
    setInterval("countdownTimer()", 1000);

}