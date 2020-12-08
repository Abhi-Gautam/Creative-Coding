let kMax = 1;
let step = 1;
let n = 10;
let radius = 0;
let inter = 0.1;
let maxNoise = 300;
let a = 1;


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    angleMode(DEGREES);
    strokeWeight(2);
    noFill();
}

function draw() {
    let t = frameCount/400;
    background(0);
    for(let i = 0; i < n; i++) {
        stroke(255*noise(i/n), 255*noise(2*i/n), 255*noise(3*i/n), 255);
        fill(255 * noise(i / n), 255 * noise(2 * i / n), 255 * noise(3 * i / n), 35)
        let size = radius + i * inter + 2*(i * i);
        let k = kMax * sqrt(i / n);
        let noiseness = maxNoise * sqrt(i / n);
        blob(size+a, width / 2, height / 2, k, t + i * step, noiseness, i);
    }
    if(a<=30) a+=0.1;
    // console.log(a);

}

function blob(size, xc, yc, k, t, noiseness, i) {
    beginShape();
    let angleStep = 360/5;
    for (let theta = 0; theta < 360; theta += angleStep) {
        let r1, r2;
        r1 = cos(theta) + 1;
        r2 = sin(theta) + 1;
        let r = size + noise(k * r1, k * r2, t) * noiseness;
        let x = xc + r * cos(theta);
        let y = yc + r * sin(theta);
        curveVertex(x, y);
    }
    endShape(CLOSE);
}