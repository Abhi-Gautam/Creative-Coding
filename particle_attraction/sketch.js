var mass = [];
var positionX = [];
var velocityX = [];
var positionY = [];
var velocityY = [];


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    noStroke();
    fill(255, 165, 171, 192);
}

function draw() {
    background(69, 9, 32);
    for(var particleA = 0; particleA < mass.length; particleA++) {
        var accelerationX = 0, accelerationY = 0;
        
        for(var particleB = 0; particleB < mass.length; particleB++){
            if(particleA != particleB){
                var distanceX = positionX[particleB] - positionX[particleA];
                var distanceY = positionY[particleB] - positionY[particleA];
                var distance = sqrt(distanceX*distanceX + distanceY*distanceY);
                if(distance < 1)
                    distance = 1;
                var force = (distance - 320)*mass[particleB]/distance;
                accelerationX += force*distanceX;
                accelerationY += force*distanceY;
            }
        }
        velocityY[particleA] = velocityY[particleA]*0.99 + accelerationY*mass[particleA];
        velocityX[particleA] = velocityX[particleA]*0.99 + accelerationX*mass[particleA];
    }
    for(var particle = 0; particle < mass.length; particle++){
        positionX[particle] += velocityX[particle];
        positionY[particle] += velocityY[particle];
        ellipse(positionX[particle], positionY[particle], mass[particle]*1000, mass[particle]*1000);
    }
}

function addParticles() {
    mass.push(random(0.0025, 0.025));
    positionX.push(mouseX);
    positionY.push(mouseY);
    velocityX.push(0);
    velocityY.push(0);
}

function mouseClicked() {
    addParticles();
}
 
function mouseDragged() {
    addParticles();
}