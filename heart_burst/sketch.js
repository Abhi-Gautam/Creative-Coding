let kMax;
let step;
let n = 100; // number of blobs
let radius = 15; // diameter of the circle
let inter = 0.5; // difference between the sizes of two blobs
let maxNoise = 200;

let noiseProg = (x) => (x * x);

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 1);
    angleMode(DEGREES);
    noFill();
    noLoop();
    kMax = random(0.6, 1.2);
    step = 0.01;
    noStroke();
}

function draw() {
    background(0.6, 0.75, 0.25);
    rotate(PI);
    for (let i = n; i > 0; i--) {
        let alpha = 1 - noiseProg(i / n);
        //Change color of the heart here
        fill((alpha / 5 + 0.3) % 1, 1, 1, alpha);
        let size = radius + i * inter;
        let k = kMax * sqrt(i / n);
        let noisiness = maxNoise * noiseProg(i / n);
        blob(size, width / 2, height / 2, k, i * step, noisiness);
    }
}

function blob(size, xCenter, yCenter, k, t, noisiness) {
    beginShape();
    let angleStep = 360 / 500;
    for (let theta = 360; theta > 0; theta -= angleStep) {
        let r1, r2;
        r1 = cos(theta) + 1;
        r2 = sin(theta) + 1;
        let r = size + noise(k * r1, k * r2, t) * noisiness;
        let x = xCenter + 16* (r/10) * pow(sin(theta), 3);
        let y = yCenter + (r/10) * (13 * cos(theta) - 5 * cos(2 * theta) - 2 * cos(3 * theta) - 4 * cos(4*theta));
        curveVertex(x, y);
    }
    endShape(CLOSE);
}