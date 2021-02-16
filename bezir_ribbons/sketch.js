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
    palette1 = [color(274, 51, 100, 35), color(10, 35, 100, 10), color(173, 73, 62, 25)]
    palette2 = [color(43, 55, 91, 45), color(27, 60, 96, 20), color(9, 18, 99, 20)]
    let x = [-20, -100, -10, -105];
    ribbons.push(new Ribbon(palette1[0], 1.5*height, x, 50, 17, 0.8, 0.001));
    // ribbons.push(new Ribbon(palette1[1], 1.5*height, x, 50, 17, 0.8, 0.002));
    ribbons.push(new Ribbon(palette1[2], height, x, 50, 17, 0.8, 0.003));
    // ribbons.push(new Ribbon(palette2[0], height, x, 25, 15, 0.6, 0.004));
    ribbons.push(new Ribbon(palette2[1], height/2, x, 30, 20, 0.6, 0.005));
    // ribbons.push(new Ribbon(palette2[2], 0, x, 30, 20, 0.8, 0.006));


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
        var y3 = this.ypos * noise(this.t + 10);
        var y4 = this.ypos * noise(this.t + 15);

        for(let i = 0; i < 4; i++){
            this.x[i] += this.speed;
        }
        bezier(this.x[0], y1, this.x[1], y2, this.x[2], y3, this.x[3], y4);
        if (this.x[1] > width) noLoop();
        this.t += this.increment;
    }
}

