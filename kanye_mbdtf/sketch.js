let imgs = [];
let parental;
let img_num = 5;
let graphics;
let w, h;
let scl = 10;
size = 250;
border = 8;


function preload() {
    w = int(600);
    h = int(600);

    for (let i = 0; i < img_num; i++) {
        let img = loadImage("https://loremflickr.com/" + w + "/" + h + "/kanye/?random=" + i,
            function () { imgs.push(img); });
    }
    parental = loadImage("parental2.png");
}

function setup() {
    createCanvas(w, h);
    angleMode(DEGREES);
    noStroke();
    graphics = createGraphics(width, height);
    graphics.colorMode(HSB, 360, 100, 100, 100);
    graphics.angleMode(DEGREES)
}

function draw() {
    background('#EC2440');

    graphics.clear();

    for(let i = 0; i < img_num; i++)
    {
        fill('#faca0a');
        rectMode(CENTER);
        rect(300, 300, size + border, size + border);
        graphics.image(random(imgs), 300, 300, 250, 250);
    }


    // graphics.filter(POSTERIZE, 9);
    // graphics.filter(THRESHOLD, ratio, 1-ratio);
    // graphics.filter(INVERT);
    push();
    imageMode(CENTER);
    image(graphics, 175, 175);
    image(parental, 540, 560, 100, 100);
    pop();

    frameRate(.5);
}