let x = 90.0;
let speed = 1.0;
let radius = 4.0;
let angle = 0.0;
let h = 4;

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    smooth();
    noStroke();

    background(18, 10, 143)
}

function draw() {
    fill(115, 194, 251, 10);
    stroke(115, 194, 251, 60);
    angle = angle - 0.01;

    translate(x, height/h); //set the y coordinate of the circle
    rotate(angle);

    triangle(-50, -50, -50, -50, 30, 30); //outer white
    triangle(-50, -50, -50, -50, 90, 30); //inner white
    triangle(-50, -0, -20, -20, 110, 2);  //black


    x = x + speed;
    if (x > width + radius) {
        x = - radius;
    }
    h-=0.0008;
    if(h<=1-2)
        noLoop();
}