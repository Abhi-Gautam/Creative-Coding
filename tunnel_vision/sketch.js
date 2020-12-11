m = 0;
C = 0;



function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0);
    rectMode(CENTER);
    noFill();
    colorMode(HSB, 255);
}


function draw() {
    background(0);
    C+=0.2;
    x = width/2;
    y = height/2;
    alpha = 255
    for(let i = 0; i < 100; i++)
    {
        r = noise((i + C)*0.05)*TAU*3;
        x += cos(r)*10;
        y += sin(r)*10;
        p = pow(0.95, i);
        if(i > 50) alpha = 0;
        stroke((m + i * 2)%255, (y), (x - i), alpha);
        strokeWeight(60);
        rect(x , y, width*p, p*height, 30, 30);
        m += 0.01;
        alpha -= 1;
    }
}