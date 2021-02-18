let kMax;
let step;
let n = 300; // number of blobs
let r = 70;
let a = 75;
let b = 15;
let inter_r = 0.9   ;
let maxNoise = 400;
let i = 0;

let noiseProg = (x) => (x * x);

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(HSB, 360, 100, 100, 1);
    angleMode(DEGREES);
    background(26, 16, 18);
    
    // strokeWeight(0.8);
    noFill();
    kMax = 1;
    step = 0.02;
}

function draw() {
    // background(278, 100, 72);

    let t = frameCount / 400;
    let radius = r + i * inter_r;

    let k = kMax * sqrt(i / n);
    let noisiness = maxNoise * noiseProg(i / n);
    blob(radius, width / 2, 3 * height / 4, k, i * step + t, noisiness);
    i+=1.1;

    if(i > n) noLoop();
}

function blob(size, xCenter, yCenter, k, t, noisiness) {
    beginShape();
    let angleStep = 1;
    for (let theta = 180; theta >= -180; theta -= angleStep) {

        let r1, r2;
        r1 = cos(theta) + 1;
        r2 = sin(theta) + 1;
        let r = size + noise(k * r1, k * r2, t) * noisiness;
        if(theta <= 170 && theta  >= 10){
            
            if(theta == 45 || theta == 135)
            {
                stroke(4, 61, 98, 0.3);
                let x = xCenter + r/3 * cos(theta);
                let y = yCenter + r/3 * sin(theta);
                curveVertex(x, y);
            }
            
        }
        else
        {
            stroke(4, 61, 98, 1);
            let x = xCenter + r * cos(theta);
            let y = yCenter + r * sin(theta);
            curveVertex(x, y);
        }
    }
    endShape(CLOSE);
}