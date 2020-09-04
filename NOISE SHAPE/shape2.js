// By Roni Kaufman

let kMax; // maximal value for the parameter "k" of the blobs
let step = 0.01; // difference in time between two consecutive blobs
let n = 100; // total number of blobs
let radius = 0; // radius of the base circle
let inter = 0.05; // difference of base radii of two consecutive blobs
let maxNoise = 700; // maximal value for the parameter "noisiness" for the blobs

//let noiseProg = (x) => (x);

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 1);
    angleMode(DEGREES);
    noFill();
    //noLoop();
    kMax = random(0.6, 1.0);
    noStroke();
}

function draw() {
    background(0);
    let t = frameCount / 100;
    for (let i = n; i > 0; i--) {
        let alpha = 1-(i / n);
        fill(noise((alpha+0.75)%1), 1, 1, alpha);
        let size = radius + i * inter;
        let k = kMax * sqrt(i / n);
        let noisiness = maxNoise * (i / n);
        blob(size, width / 2, height / 2, k, t - i * step, noisiness);
    }
}

// Creates and draws a blob
// size is the radius (before noise) of the base circle
// (xCenter, yCenter) is the position of the center of the blob
// k is the tightness of the blob (0 = perfect circle, higher = more spiky)
// t is the time
// noisiness is the magnitude of the noise (i.e. how far it streches out)
function blob(size, xCenter, yCenter, k, t, noisiness) {
    beginShape();
    let angleStep = 360 / 10;
    for (let theta = 0; theta <= 360 + 2 * angleStep; theta += angleStep) {
        let r1, r2;
        r1 = cos(theta) + 1;
        r2 = sin(theta) + 1;
        let r = size + noise(k * r1, k * r2, t) * noisiness;
        let x = xCenter + r * cos(theta);
        let y = yCenter + r * sin(theta);
        curveVertex(x, y);
    }
    endShape();
}