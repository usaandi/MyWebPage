function init() {

    var imageList = new Array("Images/dota2lanes.jpg", "Images/dota2logo.jpg", "Images/dota2qop.jpg", "Images/dota2rubick.jpg");
    var currentImage = 0;

    function rotate() {

        this.currentImage++;
        if (currentImage == 3) {
            currentImage = 0;
        }

    }
}