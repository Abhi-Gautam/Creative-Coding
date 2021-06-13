var img;
var bandHeight = bandWidth = 30;
var bandMisalign = 60;
let pallete;
function preload() {
    img = loadImage('portrait.jpg');
    pallete = [color(255, 0, 0, 100), color(0, 0, 255, 100), color(0, 255, 0, 100)];
}
function setup() {
    createCanvas(3464, 3464);
    for (var i = 0; i < img.height; i += bandHeight) {

        if(random() < 0.25)
        {
            img.copy(img,
                0, i, img.width, bandHeight,
                random(-bandMisalign, bandMisalign), i + random(10, 25), img.width, bandHeight);
        }
    }
    for (var i = 0; i < img.width; i += bandWidth) {

        if (random() < 0.10) {
            img.copy(img,
                i, 0, bandWidth, img.height,
                i + random(10, 25), random(-bandMisalign, bandMisalign), bandWidth, img.height);
        }
    }
    var heightResized = width * img.height / img.width;
    image(img, 0, 0, img.width, img.height, 0, 0, width, heightResized);

    bandHeight = 10;
    for (var i = 0; i < img.height; i += bandHeight) {
        if (random() > 0.95) {
            fill(random(pallete));
            noStroke();
            rect(0, i, img.width, bandHeight);
        }
    }
    bandWidth = 15;
    for (var i = 0; i < img.width; i += bandWidth) {
        if (random() > 0.95) {
            fill(random(pallete));
            noStroke();
            rect(i, 0, bandWidth, img.height);
        }
    }
}