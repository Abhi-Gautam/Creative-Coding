let particles = [];

let n;
let squiggliness = 1/25;
let count = 150;
let maxSize = 250;
let interval;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(HSB, 100);

    noStroke();
    background(10);
    updateParticles();
}


function draw() {
    for(let p of particles) {
        p.draw();
        p.move();
    }
}

function updateParticles() {
    particles = [];
    let r = count;
    let hue = random(0, 100);
    n = 10*count;

    for (let i = 0; i < n; i++) {
        let theta = map(i, 0, n, -PI, PI);
        let x = width/2 + r*cos(theta);
        let y = height/2 + r*sin(theta);

        let size = random(3, 4.5);
        let c = color(hue, random(90, 100), random(80, 100), 100);
        particles.push(new Particle(x, y, size, c));
    }
}

function Particle(x, y, size, c){
    this.x = x;
    this.y = y;
    this.s = size;
    this.c = c;

    this.alpha = 100;
    this.dist = 1;

    this.move = function() {
        let theta = noise(this.y *squiggliness, this.x*squiggliness)*PI*4;
        let v = p5.Vector.fromAngle(theta, this.dist);

        this.x += v.x;
        this.y += v.y;

        this.alpha *= 0.99;
        this.s *= 0.99;

    }

    this.draw = function() {
        this.c.setAlpha(this.alpha);
        fill(this.c);
        circle(this.x, this.y, this.s);
        this.c.setAlpha(100);
    }
}