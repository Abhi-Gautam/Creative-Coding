function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    w = min(width, height);
    h = w/2;

    noStroke();
    colorMode(HSB);
    rectMode(CENTER);
}

function draw() {
    translate(width/2, height/2);
    background(240, 180, 30);
    drawRect(h, 0, 0);
}

function drawRect(size, x, y) {
    if (size / h < abs(noise(x / h + frameCount / 200, y / h + frameCount / 100, mag(x,y)/w) - 0.46)) {
        fill(size, w, w);
        rect(x, y, size, size);
    }
    else {
        size = size / 2;
        if (size > 1) {
            drawRect(size, x - size, y - size);
            drawRect(size, x + size, y + size);
            drawRect(size, x - size, y + size);
            drawRect(size, x + size, y - size);
        }
    }

    
}