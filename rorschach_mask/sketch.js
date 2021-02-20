
let noiseBackground;

let img;

function preload() {
    img = loadImage('mask.jpg');
}

function setup() {
    createCanvas(window.innerHeight, window.innerHeight);

    fill(10, 200);

    noStroke();
    createNoiseBackground();
}

function draw() {
    background(206, 212, 218, 50);
    image(noiseBackground, 0, 0);
    // image(img, width/2, 0);

    let alpha = 200;
    let t = frameCount / 200;
    for (let x = 0; x < width; x += 4) {
        for (let y = 0; y < height; y += 4) {
            let nse;
            if (x < width / 2) {
                nse = noise(x / alpha, y / alpha, t);
            } else {
                nse = noise((width - x) / alpha, y / alpha, t);
            }
            if (nse < 0.4) {
                circle(x, y, 8);
            }
        }
    }
}

function createNoiseBackground() {
    noiseBackground = createGraphics(width, height);
    noiseBackground.noStroke();

    for (let i = 0; i < 10000; i++) {
        noiseBackground.fill(random(180, 230), 5);
        noiseBackground.ellipse(random(width), random(height), random(10), random(2));
    }
}