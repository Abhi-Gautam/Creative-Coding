//caleidoscopio 

// color palette

var colors = ["#ff0000", "#feb30f", "#0aa4f7", "#000000", "#ffffff"];

// set weights for each color 

var weights = [1, 2, 2, 1, 1, 0];

// number of drawing agents 

var nAgents = 500;

let agent = [];

// set spinning direction (plus or minus)

var direction = -1;

var par = 0;

let border = 0;


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(HSB, 360, 100, 100, 100);
    //rectMode(CENTER);
    strokeCap(SQUARE);

    background(0, 0, 0);

    for (let i = 0; i < nAgents; i++) {
        agent.push(new Agent());
    }

}

function draw() {

    if (frameCount > 1500) {
        noLoop();
    }


    for (let i = 0; i < agent.length; i++) {
        agent[i].update();
    }



}

// paintining agent 


class Agent {
    constructor() {

        this.p = createVector(random(border, width - border), random(border, height - border));

        this.pOld = createVector(this.p.x, this.p.y);

        this.step = 0.5;

        this.scale = 5;

        this.color = generateColor();

        if (random(0, 1) > 0.5) {
            this.direction = 1;
        } else {
            this.direction = -1;
        }

        //this.strokeWidth = random(1,2);
        this.strokeWidth = random(1, 2);
    }

    getPartner() {
        return this.partner;
    }

    getP() {
        return this.p;
    }

    getColor() {
        return this.color;
    }


    update() {

        if (random(0, 1) < 1.0e-4) {
            this.direction *= -1;
        }

        this.p.x += this.direction * vector_field(this.p.x, this.p.y, this.scale).x * this.step;
        this.p.y += this.direction * vector_field(this.p.x, this.p.y, this.scale).y * this.step;

        strokeWeight(this.strokeWidth);
        stroke(this.color);

        line(this.pOld.x, this.pOld.y, this.p.x, this.p.y);

        //this.pOld.set(this.p);
    }

}

// vector field function 
// the painting agents follow the flow defined 
// by this function 


function vector_field(x, y, myScale) {

    x = map(x, 0, width, -myScale, myScale);
    y = map(y, 0, height, -myScale, myScale);

    let k1 = 5;
    let k2 = 3;

    //let u = sin(k1 * y) + cos(k2 * y) + map(noise(x,y),0,1,-1,1);
    //let v = sin(k2 * x) - cos(k1 * x) + map(noise(x,y),0,1,-1,1);

    let u = sin(k1 * y) + cos(k2 * y);
    let v = sin(k2 * x) - cos(k1 * x);

    return createVector(u, v);
}



function generateColor() {
    let temp = myRandom(colors, weights);

    myColor = color(hue(temp) + randomGaussian() * 10,
        saturation(temp) + randomGaussian() * 10,
        brightness(temp) * 0.75,
        random(0, 50));

    return myColor;
}

// function to select 

function myRandom(colors, weights) {
    let sum = 0;

    for (let i = 0; i < colors.length; i++) {
        sum += weights[i];
    }

    let rr = random(0, sum);

    for (let j = 0; j < weights.length; j++) {

        if (weights[j] >= rr) {
            return colors[j];
        }
        rr -= weights[j];
    }
}