brushes = [];
leaves = 2;



function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(255);
    for(let i = 0; i < 15; i++)
    {
        brushes.push(new Brush());
    }
}

function draw() {
    for(let brush of brushes)
        brush.paint();
}

class Brush {
    constructor() {
        this.angle = random(TWO_PI);
        this.x = random(width);
        this.y = random(height);
        this.clr = color(random(255), random(255), random(255), 15);
        this.components = [];
        for(let i = 0; i < leaves; i++) this.components.push(random(1, 5));
    }

    paint() {
        let a = 0; 
        let r = 0;
        let x1 = this.x;
        let y1 = this.y;

        let u = random(0.5, 0.6);

        fill(this.clr);
        noStroke();
        beginShape();
        while (a < TWO_PI) {
            vertex(x1, y1);
            let v = random(0.85, 1);
            x1 = this.x + r * cos(this.angle + a) * u * v;
            y1 = this.y + r * sin(this.angle + a) * u * v;
            a += PI / 180;
            for (let i = 0; i < leaves; i++) {
                r += sin(a * this.components[i]);
            }
        }
        endShape(CLOSE);

        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
            this.angle += HALF_PI;
        }

        this.x += 2*cos(this.angle);
        this.y += 2*sin(this.angle);
        this.angle += random(-0.15, 0.15);
    }
}