let vinyl;
let radius = 0;


function preload() {
    vinyl = loadImage('vinyl_4.png');
}

function setup() {
    createCanvas(800, 800);
    strokeWeight(3);
    translate(width / 2, height / 2);
    background(0);

    noFill();
    for(let i = 0; radius <= width/2; i++) {
        if(i%2) stroke(0);
        else stroke(255);
        circle(0, 0, 2*radius);
        radius+= 5;
    }
    imageMode(CENTER);
    push();
    image(vinyl, 0, 0, 150, 150);
    pop();
}

function draw() {

}
