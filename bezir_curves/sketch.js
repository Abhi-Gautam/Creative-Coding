var t;
let a = 0.001
let speed = 0.0005

function setup() {
    createCanvas(windowWidth, windowHeight);

    background(0);
    stroke(255, 0, 0, 200);
    noFill();
    t = 0;
}

function draw() {
    var x1 = width / 2*noise(t+15);
    var x2 = width / 2 * noise(t + 25);
    var x3 = width / 2 * noise(t + 35);
    var x4 = width / 2 * noise(t + 45);
    var y1 = height / 2 * noise(t + 55);
    var y2 = height / 2 * noise(t + 65);
    var y3 = height / 2 * noise(t + 75);
    var y4 = height / 2 * noise(t + 85);

    translate(width / 2, height / 2)
    rotate(frameCount / 100);

    if (a > 1.5 || a < 0.001) {
        speed *= -1
    }
    a += speed

    scale(a)
    a += speed;

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);


    t += 0.005;
}
