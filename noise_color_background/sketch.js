
let noiseBackground;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    noStroke();
    rectMode(CENTER);
}

function draw() {

    let alpha = 200;
    let t = frameCount / 200;
    background(255);
    

    for (let x = 0; x < width; x += 10) {
        for (let y = 0; y < height; y += 10) {
            let nse;
            if (y < height / 2) {
                nse = noise(x / alpha, y / alpha, t);
            } else {
                nse = noise(x / alpha, (height-y) / alpha, t);
            }
            if (nse < 0.6) {
                // fill(255 * noise(x / alpha), 255 * noise(y / alpha), 255 * noise(t), 200);
                // circle(x, y, 20);
            }
            else{
                fill(255 * (1-noise(x / alpha)), 255 * (1-noise(y / alpha)), 255 * (1-noise(t)), 150);
                circle(x, y, 20);
            }
        }
    }
}