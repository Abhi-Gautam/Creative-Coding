let maxTime = 800;
let strokesPerFrame = 30;
// let imgList = ['Results/me1.jpg', 'Results/me2.jpg', 'Results/me3.jpg', 'Results/me4.jpg'];
let imgList = ['Results/s5.jpeg'];

let img;
let brightnessShift;
let imgIndex = -1;

function setup() {
    createCanvas(800, 1200);
    colorMode(HSB, 255);
    reset();
}

function draw() {
    translate(width /2, height / 2);
    for(let i = 0; i < strokesPerFrame; i++) {
        

        let x = random(img.width);
        let y = random(img.height);
        let c  = color(img.get(x, y));

        push();
        translate(x - img.width/2, y - img.height/2);

        if(frameCount % 5 == 0) {
            paintDot(c, random(2, 20)*map(frameCount, 0, maxTime, 1, 0.5));
        }
        else {
            paintStroke(map(frameCount, 0, maxTime, 40, 5), c, random(2, 8)*map(frameCount, 0, maxTime, 1, 0.1));
        }
        pop();
    }

    if(frameCount > maxTime) {
        noLoop();
    }
}

// function mousePressed() {
//     reset();
// }

function reset() {
    background(255);
    loop();
    frameCount = 0;

    brightnessShift = random(255);

    imgIndex++;

    if(imgIndex >= imgList.length) {
        imgIndex = 0;
    }

    img = loadImage(imgList[imgIndex]);
    img.loadPixels();
}

function paintStroke(length, c, strokeThickness) {
    
    let b = brightness(c);
    let bShift = (b + brightnessShift) % 255;

    push();

    rotate(radians(map(b, 0, 255, -180, 180)));
    stroke(map(bShift, 0, 255, 0, 255), 150, map(b, 0, 255, 0, 100), 50);
    line(-length, 1, length, 1);
    stroke(map(bShift, 0, 255, 0, 255), 150, map(b, 0, 255, 0, 255));
    strokeWeight(strokeThickness);
    line(-length, 0, length, 0);
    stroke(map(bShift, 0, 255, 0, 255), 150, map(b, 0, 255, 150, 255), 20);
    line(-length, 2, length, 2);

    pop();
}

function paintDot(c, strokeThickness) {

    let b = brightness(c);
    let bShift = (b + brightnessShift) % 255;

    push();

    rotate(radians(random(-180, 180)));
    stroke(map(bShift, 0, 255, 0, 255), 150, map(b, 0, 255, 0, 255));
    strokeWeight(strokeThickness);
    line(0, 0, 5, 0);

    pop();
}