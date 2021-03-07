let kMax;
let step;
let n = 200; // number of blobs
let radius = 50; // diameter of the circle
let inter = 0.05; // difference between the sizes of two blobs
let maxNoise = 352;
let i = 200;
let counter = 0;

let noiseProg = (x) => (x*x);

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 1);
    angleMode(DEGREES);
    background(0, 0, 100, 1);

    noFill();
    kMax = 1.5;
    step = 0.01;
    noStroke();
}

function draw() {

    let t = frameCount/400;
    stroke(360, 100, 100, 0.05);
    strokeWeight(1.5);
    let k = kMax * sqrt(i / n);
    let noisiness = maxNoise * noiseProg(i / n);
    blob(radius + i*inter, width / 2, height / 2, k, i*step + t, noisiness);

    i -= random(0.1);
    counter++;
    if(counter > 4*n) noLoop();
}

function blob(size, xCenter, yCenter, k, t, noisiness) {
    beginShape();
    let angleStep = 360 / 500;
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