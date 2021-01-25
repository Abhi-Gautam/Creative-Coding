let imgs = [];
let img_num = 50;
let scl = 10;
let w, h;
let offset, margin;
let ratio = 0.25;
let graphics;

function preload() {
    w = int(300 / 2.54 * 72 / scl);
    h = int(300 / 2.54 * 72 / scl);

    for(let i = 0; i < img_num; i++) {
        let img = loadImage("https://loremflickr.com/" + w + "/" + h + "/japan/?random=" + i, 
        function() {imgs.push(img);});
    }
}

function setup() {
    createCanvas(w, h);
    colorMode(HSB, 360, 100, 100, 100);
    angleMode(DEGREES);

    graphics = createGraphics(width, height);
    graphics.colorMode(HSB, 360, 100, 100, 100);
    graphics.angleMode(DEGREES)

    offset = width / 50;
    margin = offset / 1.5;
}


function draw() {
    background(0, 0, 95);

    graphics.clear();

    let ySep = int(random(1, 6));
    let yRowHeight = (height - offset * 2 - margin*(ySep -1));

    let ySepArr = [];
    let ySepSum = 0;
    for(let i = 0; i < ySep; i++) {
        let value = random([1, 5]);
        ySepArr.push(value);
        ySepSum += value;
    }

    for(let i = 0; i < ySep; i++) {
        ySepArr[i] /= ySepSum;
    }


    ySepSum = 0;
    for(let i = 0; i < ySepArr.length; i++)
    {
        let y = offset + i*margin + ySepSum*yRowHeight;

        let h = max(int(ySepArr[i]*yRowHeight), 1);

        let xSep = int(random(1, 6));

        let xColWidth = (width - offset*2 - margin*(xSep -1));
        let xSepArr = [];
        let xSepSum = 0;

        for (let i = 0; i < xSep; i++) {
            let value = random(1);
            xSepArr.push(value);
            xSepSum += value;
        }
        for (let i = 0; i < xSep; i++) {
            xSepArr[i] /= xSepSum;
        }
        xSepSum = 0;

        for(let j = 0; j < xSepArr.length; j++) {
            let x = offset + xSepSum * xColWidth + j * margin;
            let w = max(int(xSepArr[j] * xColWidth), 1);

            let img = random(imgs);

            let img_trim = img.get(random(img.width - w), random(img.height - h), w, h);

            if(min(w, h) > 0)
            {
                strokeWeight(0);
                rect(x, y, w, h);
                graphics.image(img_trim, x, y, w, h);
            }
            xSepSum += xSepArr[j];
        }
        ySepSum += ySepArr[i];
    }
    graphics.filter(POSTERIZE, 6);
    // graphics.filter(THRESHOLD, ratio, 1-ratio);
    // graphics.filter(INVERT);
    push();
    image(graphics, 0, 0);
    pop();

    frameRate(.5);
}

