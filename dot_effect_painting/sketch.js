var image;
var balls = [];
var radiusLow;
var radiusHigh;
var rangeLow;
var rangeHigh;


function preload() {
    img = loadImage("venom.jpg");
}

function setup() {
    createCanvas(img.width, img.height);
    background(255);
    textAlign(CENTER);
    text("Click and hold here!!", width/2, height/2);
}

function draw() {
    for(var i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].colorChange();
    }
    for(var i = 0; i < balls.length ; i++){
        if(balls[i].radius < 0)
            balls.splice(i, 1);
    }
    if(mouseIsPressed){
        for(var i = 0; i< 5; i++){
            balls.push(new Ball(mouseX, mouseY, color(img.get(mouseX+random(2), mouseX+random(2)) )));
        }
    }
    console.log(frameRate);
}



class Ball {
    constructor(mX, mY, c){
        this.location = createVector(mX, mY);
        this.radius = random(10, 20);
        this.r = red(c);
        this.g = green(c);
        this.b = blue(c);
        this.xOff = 0.0;
        this.yOff = 0.0;
        this.radiusHigh;
        this.radiusLow;
        this.rangeHigh;
        this.rangeLow;
    }
    update(){
        this.radius -= random(0.15, 0.25);
        this.xOff = this.xOff + random(-0.5, 0.5);
        this.nX = noise(this.location.x)*this.xOff;
        this.yOff = this.yOff + random(-0.5, 0.5);
        this.nY = noise(this.location.y)*this.yOff;
        this.location.x += this.nX;
        this.location.y += this.nY;

    }

    colorChange() {
        this.c = color(img.get(this.location.x, this.location.y));
        this.r = red(this.c);
        this.g = green(this.c);
        this.b = blue(this.c);
    }

    draw() {
        noStroke();
        fill(this.r, this.g, this.b);
        ellipse(this.location.x, this.location.y, this.radius, this. radius);    
    }
}