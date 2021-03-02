
let noiseBackground;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    noStroke();
    rectMode(CENTER);
}

function draw() {

    let alpha = 200;
    let t = frameCount / 200;
    background(255 * noise(t), 255 * noise(t*t), 255 * noise(sqrt(t)), 200);
    

    for (let x = 0; x < width; x += 10) {
        for (let y = 0; y < height; y += 10) {
            let nse;
            if (x < width / 2) {
                nse = noise(x / alpha, y / alpha, t);
            } else {
                nse = noise((width - x) / alpha, y / alpha, t);
            }
            if (nse < 0.5) {
                // fill(255 * noise(x / alpha), 255 * noise(y / alpha), 255 * noise(t), 200);
                // circle(x, y, 40);
            }
            else{
                fill(255 * (1-noise(x / alpha)), 255 * (1-noise(y / alpha)), 255 * (1-noise(t)), 200);
                circle(x, y, 20);
            }
        }
    }
}