var img;
var bandHeight = 60;
var bandMisalign = 60;
function preload() {
    img = loadImage('arose.jpg');
}
function setup() {
    createCanvas(4717, 3147);
    for (var i = 0; i < img.height; i += bandHeight) {
        img.copy(img,
            0, i, img.width, bandHeight,
            random(-bandMisalign, bandMisalign), i + 10, img.width, bandHeight);
    }
    var heightResized = width * img.height / img.width;
    image(img, 0, 0, img.width, img.height, 0, 0, width, heightResized);
}