let kMax;
let step;
let n = 200; // number of blobs
let radius = 20; // diameter of the circle
let inter = 0.05; // difference between the sizes of two blobs
let maxNoise = 352;

let noiseProg = (x) => (x*x);

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 1);
    angleMode(DEGREES);
    noFill();
    noLoop();
    kMax = 1;
    step = 0.05;
    noStroke();
}

function draw() {
    background(1, 1, 0, 1);

    let t = frameCount/400;
    for (let i = n; i > 0; i--) {
        let alpha = 1 - noiseProg(i / n);
        fill((360*alpha / 5) % 360, 0, 100*(1-alpha), alpha);
        let size = radius + i * inter;
        let k = kMax * sqrt(i / n);
        let noisiness = maxNoise * noiseProg(i / n);
        blob(size, width / 2, height / 2, k, i * step + t, noisiness);
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
        let x = xCenter + r*cos(theta);
        let y = yCenter + r*sin(theta);
        curveVertex(x, y);
    }
    endShape(CLOSE);
}