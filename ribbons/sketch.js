let step;
let n = 100; // number of blobs
let radius = 1; // diameter of the circle
let inter = 0.15; // difference between the sizes of two blobs
let maxNoise = 2;
let hue = 0.522;

let noiseProg = (x) => (x);

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 1);
    angleMode(DEGREES);
    noFill();
    step = 1.2;
    noStroke();
}

function draw() {
    background(0.8, 1, 0);
    let t = frameCount / 3;
    translate(width / 2, height / 2);
    rotate(-t / 2);
    for (let i = n; i > 0; i--) {
        rotate(2);
        let size = radius + i * inter;
        let noisiness = maxNoise * noiseProg(i / n);
        let alpha = i / n;
        fill(0.8, alpha, 1-alpha, alpha);
        blob(size, 0, 0, t + i * step, noisiness, 10);
    }
}

function blob(size, xCenter, yCenter, t, noisiness, nPoints) {
    beginShape();
    let angleStep = 180 / nPoints;
    for (let theta = 0; theta <= 360 + 3 * angleStep; theta += angleStep) {
        let r = (size + ((cos((theta + t) * nPoints) + 1) / 5 + (sin((theta + t) * nPoints) + 1) / 5) * noisiness) * 10;
        let x = xCenter + r * cos(theta + t);
        let y = yCenter + r * sin(theta + t);
        curveVertex(x, y);
    }
    endShape();
}