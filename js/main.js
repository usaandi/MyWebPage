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

function test() {
    aboutMe();
    aboutBlog();
    aboutProjects();
}

function aboutMe() {
    document.getElementById('textBase').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis nisl vel ligula lacinia porta. Mauris semper nisi non justo facilisis, at sodales ante ultrices. Integer leo erat, venenatis non mi ut, venenatis ullamcorper odio. Phasellus a sagittis tortor. Duis bibendum hendrerit orci, nec ultricies ipsum auctor quis. Quisque posuere, mi a dignissim rhoncus, massa quam tempor ex, ac iaculis nisl ipsum nec purus. Nullam odio purus, auctor in congue quis, euismod at dolor.";
    document.getElementById('title123').innerHTML = "About Me";
}

function aboutBlog() {
    document.getElementById('textBase').innerHTML = "Mina olen Lorem ipsum ja olen lorem ipsum aastat vana, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    document.getElementById('title123').innerHTML = "About Blog";
}

function aboutProjects() {
    document.getElementById('textBase').innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    document.getElementById('title123').innerHTML = "My Projects";
}