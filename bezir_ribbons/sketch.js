// var x1 = -20, x2 = -100, x3 = -10, x4 = -105;
// x = [-20, -100, -10, -105]
let num = 3;
ribbons = []

// let x = [-20, -100, -10, -105];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(HSB, 360, 100, 100, 100);
    background(262, 100, 17);
    noFill();
    let t = 0;
    palette = [color(274, 51, 100, 35), color(10, 35, 100, 10), color(151, 28, 70, 15)]
    let x = [-20, -100, -10, -105];
    // ribbons.push(new Ribbon(palette[0], height/2, x, 150, 10, 0.2, 0.003));
    // ribbons.push(new Ribbon(palette[1], height/2, x, 100, 8, 0.5, 0.002));
    ribbons.push(new Ribbon(palette[2], height, x, 200, 9, 1, 0.005));

}

function draw() {

    for(let ribbon of ribbons)
        ribbon.update();

}


class Ribbon {

    constructor(c, ypos, x, lenght, thickness, speed, incr) {
        this.c = c;
        this.ypos = ypos;
        this.lenght = lenght;
        this.thickness = thickness;
        this.speed = speed;
        this.x = x;
        this.t = 0;
        this.increment = incr;
    }

    update() {

        stroke(this.c);
        strokeWeight(this.thickness);

        var y1 = (this.ypos + this.lenght) * noise(this.t + 5);
        var y2 = (this.ypos + this.lenght) * noise(this.t + 5);
        var y3 = this.ypos * noise(this.t + 35);
        var y4 = this.ypos * noise(this.t + 45);

        for(let i = 0; i < 4; i++){
            this.x[i] += this.speed;
        }
        bezier(this.x[0], y1, this.x[1], y2, this.x[2], y3, this.x[3], y4);
        if (this.x[1] > width) noLoop();
        this.t += this.increment;
    }
}

