let kMax;
let step;
let n = 14;
let radius = 0;
let inter = 0.1;
let maxNoise = 300;

let noiseProg = (x) => (sqrt(x));


function setup () {
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(HSB, 1);
    angleMode(DEGREES);
    kMax = 1;
    step = 1;
    strokeWeight(2);
    stroke(0);
}


function draw () {
    background(0);

    let t = frameCount/400;


    for(let i = n; i > 0; i--) {
        let alpha = 1 - noiseProg(i/n);

        if(i%2){
            fill(0, 1-alpha);
            stroke(0.66, 1, 1, 0.8);
        }
        else{
            fill(0.66, 1, 1, 0.8);
            stroke(0, 0.8);
        }

        let size = radius + i*inter + i*i/2;
        let k = kMax*sqrt(i/n);
        let noiseness = maxNoise*noiseProg(i/n);
        blob(size, width/2, height/2, k, t+i*step, noiseness);
    }
    // fill(0);
    // ellipse(width/2, height/2, 35);
}

function blob(size, xc, yc, k, t, noiseness) {
    beginShape();
    let angleStep = 360/90;
    for(let theta = 0; theta < 360; theta += angleStep) {
        let r1, r2;
        r1 = cos(theta)+1;
        r2 = sin(theta)+1;
        let r = size+noise(k*r1, k*r2, t)*noiseness;
        let x = xc + r*cos(theta);
        let y = yc + r*sin(theta);
        curveVertex(x, y);
    }
    endShape(CLOSE);
}