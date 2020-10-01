const CYCLE = 100;
let tex;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    let s = min(windowWidth, windowHeight);
    tex = createGraphics(s * 2, s * 2);
    tex.noFill();
    tex.background(0);
    texture(tex);
    noStroke();
}

function draw() {
    background(29, 53, 87);
    orbitControl();
    let fc = (frameCount % CYCLE) / CYCLE;
    let step = (tex.width) / 20;
    tex.background(29, 53, 87, 10);
    tex.stroke(168, 218, 220);
    tex.strokeWeight(step / 10);
    for (let x = step * (- 3); x < tex.width + step * 3; x += step) {
        tex.beginShape();
        for (let y = 0; y <= tex.height; y += 10) {
            let r = map(y, 0, tex.height, 0, TAU * 4) + fc * TAU;
            tex.vertex(x + sin(r) * step * (1 + cos(fc * TAU) * 0.2), y);
        }
        tex.endShape();
    }
    rotateY(0.1);
    rotateX(1);
    sphere(min(width, height) * 0.3, 60, 30);
}