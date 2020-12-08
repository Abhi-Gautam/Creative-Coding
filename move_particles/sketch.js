var particleQuantity = 2000;


var positionX = new Array(particleQuantity);
var positionY = new Array(particleQuantity);
var velocityX = new Array(particleQuantity).fill(0);
var velocityY = new Array(particleQuantity).fill(0);

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    frameRate(20);
    stroke(224, 177, 203);
    for (var particle = 1; particle < particleQuantity; particle++) {
        positionX[particle] = random(0, width);
        positionY[particle] = random(0, height);
    }

    positionX[0] = 0;
    positionY[0] = 0; 
}


function draw() {
    background(35, 25, 66, 128);
    velocityX[0] = velocityX[0] * 0.5 + (mouseX - positionX[0]) * 0.1;
    velocityY[0] = velocityY[0] * 0.5 + (mouseY - positionY[0]) * 0.1;

    positionX[0] += velocityX[0];
    positionY[0] += velocityY[0];

    for (var particle = 1; particle < particleQuantity; particle++) {
        var whatever = 1024 / (sq(positionX[0] - positionX[particle]) + sq(positionY[0] - positionY[particle]));

        velocityX[particle] = velocityX[particle] * 0.95 + (velocityX[0] - velocityX[particle]) * whatever;
        velocityY[particle] = velocityY[particle] * 0.95 + (velocityY[0] - velocityY[particle]) * whatever;

        positionX[particle] += velocityX[particle];
        positionY[particle] += velocityY[particle];

        if ((positionX[particle] < 0 && velocityX[particle] < 0) || (positionX[particle] > width && velocityX[particle] > 0)) {
            velocityX[particle] = -velocityX[particle];
        }

        if ((positionY[particle] < 0 && velocityY[particle] < 0) || (positionY[particle] > height && velocityY[particle] > 0)) {
            velocityY[particle] = -velocityY[particle];
        }

        ellipse(positionX[particle], positionY[particle], 3, 3);
    }
}


function mousePressed() {
    for (var particle = 1; particle < particleQuantity; particle++) {
        positionX[particle] = random(0, width);
        positionY[particle] = random(0, height);
    }
}