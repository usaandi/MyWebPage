window.onload = initAll;
var dotaImages = new Array("Images/dota2lanes.jpg",
    "Images/dota2logo.jpg",
    "Images/dota2qop.jpg",
    "Images/dota2rubick.jpg");
var currentImg = 0;

function rotate() {
    currentImg++;
    if (currentImg == 4) {
        currentImg = 0;
    }
    var fadeinImage = document.getElementById("imagesBackground").src = dotaImages[currentImg];
}

function initAll() {
    setInterval("rotate()", 10000)

}