let kMax;
let step;
let n = 200; // number of blobs
let radius = 20; // diameter of the circle
let inter = 0.5; // difference between the sizes of two blobs
let maxNoise = 352;
let maxShift = 20;

let pallete;

let noiseProg = (x) => (x*x);

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 100);
    angleMode(DEGREES);
    noFill();
    kMax = 0.1;
    step = 1;
    pallete = [color(34, 98, 96, 40), color(12, 99, 86, 60), color(358, 99, 62, 60), color(339, 89, 22, 60)];
    translate(width/2, height/2);
    strokeWeight(10);
    // noLoop();
}

function draw() {
    background(0, 0, 0, 100);
    translate(width / 2, height / 2);
    let t = frameCount/400;
    for (let i = 0; i < n; i++) {
        let size = radius + i * inter;
        let k = kMax * sqrt(i / n);
        let noisiness = maxNoise * noiseProg(i / n);
        rotate(frameCount);
        translate(maxShift * noiseProg(i / n), maxShift * noiseProg(i / n))
        blob(size, 0, 0, k, i * step + t, noisiness, i);
    }
}

function blob(size, xCenter, yCenter, k, t, noisiness, i) {
    beginShape();
    stroke(pallete[i % 4]);
    let angleStep = 360 / 100;
    for (let theta = 360; theta > 0; theta -= angleStep) {
        let r1, r2;
        r1 = cos(theta) + 1;
        r2 = sin(theta) + 1;
        let r = size + noise(k * r1, k * r2, t) * noisiness;
        let x = xCenter + r*cos(theta);
        let y = yCenter + r*sin(theta);
        curveVertex(x, y);
    }
    endShape(CLOSE);
}