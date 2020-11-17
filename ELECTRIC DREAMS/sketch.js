let particles = [];
let alpha;
let colors;

let palettes = [["#DCAFD0", "#E5998D", "#189A8A", "#5E418B", "#E3DB52", "#7798DD"], ["#10111C", "#23AECC", "#ECE1B4", "#CC3016", "#F2C96E", "#178FA6"], ['#000090', '#0D809C', '#FFC200', '#D63826', '#FF7400', '#0F4155', '#5399A1', '#8CA96B', '#FF2600', '#EFAC55', '#668065', '#DBE5EC', '#336B87', '#2A3132', '#E94D35'], ["#072ac8", "#1e96fc", "#a2d6f9", "#fcf300", "#ffc600"], ["#ffdb4d", "#f54556", "#477bf5", "#ff9640", "#4ebbf5", "#fe84fe", "#ffffff"], ["#FFFFFF", "#E60011", "#FECF00"], ["#FFFFFF", "#008ADF", "#FDDF03", "#FF015C"]];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(HSB, 100);
    noStroke();
    background("#1D1A15");
    updateParticles();
    alpha = random(500, 1000);
}

function draw() {
    for(let p of particles) {
        p.draw();
        p.move();
    }
}

function updateParticles() {
    let colors = random(palettes);
    particles = [];
    let r = 1;
    let n = 500;
    for(let i = 0; i < n; i++) {
        let theta = map(i, 0, n, -PI, PI);
        let x_ = width/2 + r*cos(theta);
        let y_ = height/2 + r*sin(theta);
        let s_ = 2;
        let c_ = random(colors);
        particles.push(new Particle(x_, y_, s_, c_, i));
    }
}

function Particle(x_, y_, s_, c_, i_) {
    this.x = x_;
    this.y = y_;
    this.size = s_;
    this.c = c_;

    this.alpha = 100;
    this.dist = 1;
    this.offset = i_;


    this.move = function () {
        let theta = atan2(this.y-height/2, this.x-width/2) + frameCount/alpha + this.offset;
        let v = p5.Vector.fromAngle(theta, this.dist);
        this.x += v.x;
        this.y += v.y;

    }

    this.draw = function() {
        fill(this.c);
        circle(this.x, this.y, this.size);
    }
}