chains = [];


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    angleMode(DEGREES);
    background(0);

    let x = width / 2;
    let y = height / 4;

    let r = 50;

    for (let theta = -180; theta <= 0; theta += 6) {
        chains.push(new Rain(x + r * cos(theta), y + r * sin(theta), random(30, 40), random(3, 5), random(100, 200), 150, 1));
    }

    r = 30;

    for (let theta = -180; theta <= 0; theta += 6) {
        chains.push(new Rain(x + r * cos(theta), y + r * sin(theta), random(20, 30), random(6, 7), random(200, 250), 255, -1));
    }

    y = 5 * height / 8;
    r = 50;

    for (let theta = 180; theta >= 0; theta -= 6) {
        chains.push(new Rain(x + r * cos(theta), y + r * sin(theta), random(30, 40), random(3, 5), random(100, 200), 150, -1));
    }

    r = 30;

    for (let theta = 180; theta >= 0; theta -= 6) {
        chains.push(new Rain(x + r * cos(theta), y + r * sin(theta), random(20, 30), random(6, 7), random(200, 250), 255, 1));
    }

    for (let chain of chains) {
        chain.dripple();
    }

}

function draw() {
    noLoop();
}

class Rain {
    constructor(x, y, size, radius, alpha, grey, direction) {
        this.x = x;
        this.y = y
        this.size = size;
        this.radius = radius;
        this.alpha = alpha;
        this.grey = grey;
        this.direction = direction;
    }

    dripple() {
        let a = this.alpha;
        let c = this.grey;
        a = (this.alpha - 50) / this.size;
        c = (this.grey - 50) / this.size;
        for (let i = 0; i < this.size; i++) {
            fill(this.grey, this.alpha)
            ellipse(this.x, this.y, this.radius);
            this.radius -= 0.03;
            if (this.direction == -1) this.y += this.radius;
            else this.y -= this.radius;
            this.grey -= c;
            this.alpha -= a;
        }
    }
}   