var mass = [];
var positionX = [];
var velocityX = [];
var positionY = [];
var velocityY = [];
var size = [];
let img;
let hue = [100, 25, 50, 75];
let color = [];
let lifetime = [];



function setup() {
    colorMode(HSB, 100);
    img = loadImage('among-us.png');
    backgroundImage = loadImage('background.jpg');
    createCanvas(window.innerWidth, window.innerHeight);
    for (var particle = 0; particle < 100; particle++) {
        velocityX[particle] = random(-1, 1);
        velocityY[particle] = random(-1, 1);
    }
}

function draw() {
    background(0);
    image(backgroundImage, 0, 0);
    for (var particle = 0; particle < mass.length; particle++) {   
        tint(color[particle], 100, 100, lifetime[particle]);
        if(lifetime[particle] > 50 ) lifetime[particle] -= 0.5;
        if(lifetime[particle] < 50 ) lifetime[particle] -= 10;
        if(lifetime[particle] < 0) lifetime[particle] = 0;
        image(img, positionX[particle], positionY[particle], size[particle], size[particle]);
        noTint();
        positionX[particle] += velocityX[particle];
        positionY[particle] += velocityY[particle];
    }
    for( var particle = 0; particle < mass.length; particle++) {
        if(positionX[particle] > width || positionX[particle] < 0 || positionY[particle] > height || positionY[particle] < 0){
            mass.splice(particle, 1);
            positionX.splice(particle, 1);
            positionY.splice(particle, 1);
            velocityX.splice(particle, 1);
            velocityY.splice(particle, 1);
            size.splice(particle, 1);
            color.splice(particle, 1);
        }
    }

}

function addParticles() {
    color.push(random(hue));
    mass.push(img);
    size.push(random(20, 50));
    positionX.push(mouseX);
    positionY.push(mouseY);
    velocityX.push(0);
    velocityY.push(0);
    lifetime.push(random(100, 200));
}

function mouseClicked() {
    addParticles();
}

function mouseDragged() {
    addParticles();
}