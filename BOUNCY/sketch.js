const particles = [];
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    const particlesLength = Math.min(Math.floor(window.innerWidth / 10), 100);
    for (let i = 0; i < particlesLength; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    background(26);
    particles.forEach((particle, idx) => {
        particle.update();
        particle.draw();
        particle.checkParticles(particles.slice(idx));
    });
}

class Particle {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.vel = createVector(random(-5, 5), random(-5, 5));
        this.size = 8;
        this.col = color(255);
    }

    update() {
        this.pos.add(this.vel);
        this.edges();
    }

    draw() {
        noStroke();
        fill(this.col);
        circle(this.pos.x, this.pos.y, this.size * 2);
    }

    edges() {
        if (this.pos.x < 0 || this.pos.x > width) {
            this.vel.x *= -1;
        }

        if (this.pos.y < 0 || this.pos.y > height) {
            this.vel.y *= -1;
        }
    }
    checkParticles(particles) {
        particles.forEach(particle => {
            const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            if (d < particle.size*2) {
               let temp = particle.vel;
               particle.vel = this.vel;
               this.vel = temp;
               this.col = color(random(255), random(255), random(255));
               particle.col = color(random(255), random(255), random(255));
            }
        });
    }
}