let R;

let num = 40;
let palette1 = ["#09bc8a", "#9fa0c3"];
let palette2 = ["#75dddd", "#db7f8e", "#2f243a"];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    noLoop();
    angleMode(DEGREES);

    R = max(width, height)*1.5;

    noFill();
}

function draw() {
    background(0);

    blendMode(ADD);
    push();

    translate(width / 2, height / 2);

    let c = color(random(palette1));
    let csub = color(random(palette2));

    for(let j = 0; j < num; j++)
    {
        let stwt = j < num / 2 ? 30 : 10;
        c.setAlpha(10);
        csub.setAlpha(40);
        let stcol = j < num / 2 ? c : csub;

        strokeWeight(stwt);
        stroke(stcol);

        let delta = 0.015;

        beginShape();
        for(let i = 0; i < R; i++)
        {
            let r = i;
            let t = map(noise(i*delta, j*0.03), 0, 1, -360, 360);
            let x = r * cos(t);
            let y = r * sin(t);

            vertex(x, y);
        }
        endShape();
    }
    pop();
}