var xOffset = 0;
var yOffset = 0;
var offsetInc = 0.006;
var inc = 1;
var s = 1;
var m = 1.006;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    blendMode(ADD);
    // noFill();
    fill(252, 64, 64, 1);
    stroke(255, 64, 8, 50);
}

function draw() {
    translate(width / 2, height / 2);
    if(s < 2000)
    {
        for(var nTimes = 0; nTimes < 10; nTimes++) {
            nPoints = int(2*PI*s);
            npoints = min(nPoints, 500);

            beginShape();
            for(var i = 0; i < nPoints; i++) {
                var a = i / nPoints * TAU;
                var p = p5.Vector.fromAngle(i / nPoints * TAU);
                var n = noise(xOffset + p.x * inc, yOffset + p.y * inc) * s;
                p.mult(n);
                vertex(p.x, p.y);
            }
            endShape(CLOSE);
            xOffset += offsetInc;
            yOffset += offsetInc;
            s*=m;
        }
    }
    else {
        noLoop();
    }
}