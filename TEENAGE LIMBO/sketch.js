let colors = "e6e1c5-d4cb92-395c6b-80a4ed-bcd3f2-f24-fff-52489c-4062bb-59c3c3-ebebeb-f45b69-0c090d-e01a4f-f15946-f9c22e-53b3cb".split("-").map(a => "#" + a)
let overallTexture
class Particle {
    constructor(args) {
        let def = {
            p: createVector(0, 0),
            v: createVector(0, 0),
            a: createVector(0, 0),
            r: 10,
            dp: random(0.93, 0.99),
            angMult: random(10, 50),
            color: random(colors)
        }
        Object.assign(def, args)
        Object.assign(this, def)
    }
    draw() {
        // strokeWeight(3)
        mainGraphics.push()
        mainGraphics.translate(this.p.x, this.p.y)
        mainGraphics.fill(this.color)
        mainGraphics.noStroke()
        // stroke(0,100)
        mainGraphics.ellipse(0, 0, this.r)
        mainGraphics.pop()
    }
    update() {
        this.p.add(this.v)
        this.v.add(this.a)
        let delta = createVector(this.p.x - width / 2, this.p.y - height / 2)
        let ang = delta.heading()
        let rr = delta.mag()

        this.v.x += -sin(ang * this.angMult + rr / 5) / 15 + cos(rr / 10) / 10
        this.v.y += -cos(ang * this.angMult + rr / 5) / 15 + sin(rr / 10) / 10
        this.a.x = (noise(this.p.x, this.p.y, 5) - 0.5) * 1.1
        this.a.y = (noise(this.p.x, this.p.y, 5000) - 0.5) * 1.1

        this.v.mult(0.95)
        this.r *= this.dp

    }
}

let particles = []
let textureGraphics
let mainGraphics
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    overAllTexture = createGraphics(width, height)
    mainGraphics = createGraphics(width, height)
    overAllTexture.loadPixels()

    // noStroke()
    for (var i = 0; i < width + 50; i++) {
        for (var o = 0; o < height + 50; o++) {
            overAllTexture.set(i, o, color(150, noise(i / 10, i * o / 300) * random([0, 50, 100])))
        }
    }
    overAllTexture.updatePixels()

    background(100);
    for (var i = 0; i < width; i += 30) {
        for (var o = 0; o < height; o += 30) {
            particles.push(new Particle({
                p: createVector(i, o),
                v: createVector(noise(i / 10) * 10 - 5, noise(o / 10) * 10 - 5),
                r: random(200)
            }))
        }
    }
    background(0)
}

function draw() {
    // 
    particles.forEach(p => p.draw())
    particles.forEach(p => p.update())
    image(mainGraphics, 0, 0)

    push()
    blendMode(ADD)
    image(overAllTexture, 0, 0)
    pop()
    // ellipse(mouseX, mouseY, 20, 20);
}