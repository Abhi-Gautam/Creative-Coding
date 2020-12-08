function setup(){
    createCanvas(windowWidth, windowHeight);
    background('black');
    noLoop();
}

function draw(){
    noStroke();
    for(var i = 0; i < 300; i++){
        var x = random(width/5, width*4/5);
        var y = random(height/5, height*4/5);
       fill (noise(0.1)*57, noise(0.5)*255, noise(0.2)*20, 10);
        ellipse(x, y, 50);
        fill(57, 255, 20, 20);
        for(var j = 0; j < 1000; j++){
            ellipse(x, y, 2);
            x += 5*(noise(x/100, y/100, i/100)-0.5);
            y += 5*(noise(y/100, i/100, x/100)-0.5);
        }
    }
    noFill();
    strok(57,255,  20);
    rect(50, 50 , width-1-100, height-1-100);
}