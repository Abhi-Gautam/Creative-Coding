


let kMax;
let step;
let n = 50; // number of blobs
let radius = 0; // diameter of the circle
let inter = 0.5; // difference between the sizes of two blobs
let maxNoise = 400;

let noiseProg = (x) => (x*x);
let sound, amplitude;


function preload() {
    sound = loadSound('kanye.mp3');
}

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.mouseClicked(toggleSound);
    amplitude = new p5.Amplitude();
    colorMode(HSB, 360, 100, 100, 1);
    angleMode(DEGREES);
    noFill();
    
    noStroke();
}

function draw() {
    background(1, 1, 0, 1);
    let level = amplitude.getLevel();
    woofer(level * 1.5, width / 2 - 50, height / 2, 5, 400, 20);
    woofer(level, width / 8, height / 2, 1, 200, 50);
    woofer(level, width - width / 6, height / 2, 1, 200, 50);
    
}

function woofer(level, posx, posy, kconst, maxNoise, n)
{
    kMax = level * kconst;
    step = 1;
    let t = frameCount / 400;
    for (let i = n; i > 0; i--) {
        let alpha = 1 - noiseProg(i / n);
        fill((720 * level) % 360, 80, 100 * (1 - alpha), alpha);
        let size = radius + map(level, 0, 1, 0, 300);
        let k = kMax * sqrt(i / n);
        let noisiness = maxNoise * noiseProg(i / n);
        blob(size, posx, posy, k, i * step + t, noisiness);
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

function toggleSound() {
    if (sound.isPlaying()) {
        sound.stop();
    } else {
        sound.play();
    }
}