let _aryObjects = [];

function setup() {
    let canvasSize;
    if (windowWidth <= windowHeight) {
        canvasSize = windowWidth;
    } else {
        canvasSize = windowHeight;
    }
    createCanvas(canvasSize, canvasSize);
    frameRate(30);
    noStroke();
    let objectNum = 30;
    let rMax = width / 1.3 * random(0.2, 1);
    let yGap = height / objectNum / 1.5;
    let divideNum = 16;
    let noiseSeedRad = random(10);
    let noiseSeedAng = random(10);
    let noiseStepRad = 0.3;
    let noiseStepAng = 0.02;
    let noiseSpeedRad = 0.01;
    let noiseSpeedAng = 0.03;
    let noiseStepObj = 0.02;
    let rOffset = -0.0;
    let noiseSeedT = random(10);
    let noiseSpeedT = 0.01;
    for (let i = 0; i < objectNum; i++) {
        let myArc = new Arc(rMax, i, objectNum, yGap,
            divideNum, noiseSeedRad + i * noiseStepObj, noiseSeedAng + i * noiseStepObj, noiseSeedT + i * noiseStepObj,
            noiseStepRad, noiseStepAng, noiseSpeedRad, noiseSpeedAng, noiseSpeedT, rOffset);
        _aryObjects.push(myArc);
    }
}

class Arc {
    constructor(rMax, obj_i, objectNum, yGap,
        divideNum, noiseSeedRad, noiseSeedAng, noiseSeedT,
        noiseStepRad, noiseStepAng, noiseSpeedRad, noiseSpeedAng, noiseSpeedT, rOffset) {
        this.centX = 0;
        this.centY = yGap * (objectNum - obj_i) - height / 3;
        this.objectNum = objectNum;
        this.rMax = rMax;
        this.color = color(random(100, 200), random(100, 200), random(150, 255), 255);
        this.obj_i = obj_i;
        this.divideNum = divideNum;
        this.noiseSeedRad = noiseSeedRad;
        this.noiseSeedAng = noiseSeedAng;
        this.noiseSeedT = noiseSeedT;
        this.noiseStepRad = noiseStepRad;
        this.noiseStepAng = noiseStepAng;
        this.noiseSpeedRad = noiseSpeedRad;
        this.noiseSpeedAng = noiseSpeedAng;
        this.noiseSpeedT = noiseSpeedT;
        this.rOffset = rOffset;
    }
    drawMe() {
        this.noiseSeedRad += this.noiseSpeedRad;
        this.noiseSeedAng += this.noiseSpeedAng;
        this.noiseSeedT += this.noiseSpeedT;
        fill(this.color);
        drawingContext.shadowColor = color(0);
        drawingContext.shadowBlur = width / 8;
        drawingContext.shadowOffsetY = width / 32;
        let sumNoiseVal = 0;
        for (let i = 0; i < this.divideNum; i++) {
            sumNoiseVal += noise(this.noiseSeedAng + i * this.noiseStepAng) * 3;
        }
        let currentNoiseVal = 0;
        let d = 1;
        let rx_0;
        let ry_0;
        let rx_last;
        let ry_last;
        beginShape();
        for (let i = 0; i < this.divideNum + 3; i++) {
            let tgt_i = i;
            if (tgt_i >= this.divideNum) { tgt_i -= this.divideNum; }
            currentNoiseVal += noise(this.noiseSeedAng + tgt_i * this.noiseStepAng) * 3;
            let maxAng = 2 * PI * currentNoiseVal / sumNoiseVal + 2 * PI;
            let rx = this.rMax * (noise(this.noiseSeedRad + tgt_i * this.noiseStepRad, this.noiseSeedT) + this.rOffset) ** d * cos(maxAng);
            let ry = this.rMax * (noise(this.noiseSeedRad + tgt_i * this.noiseStepRad, this.noiseSeedT) + this.rOffset) ** d * sin(maxAng) / 2.5;
            if (tgt_i == 0) {
                rx_0 = rx;
                ry_0 = ry;
            } else if (tgt_i == this.divideNum - 2) {
                rx_last = rx;
                ry_last = ry;
            } else if (tgt_i == this.divideNum - 1) {
                rx = (rx_0 + rx_last) / 2;
                ry = (ry_0 + ry_last) / 2;
            }
            curveVertex(this.centX + rx, this.centY + ry);
        }
        endShape();
    }
}

function draw() {
    background(0);
    push();
    translate(width / 2, height / 2);
    for (let i = 0; i < _aryObjects.length; i++) {
        _aryObjects[i].drawMe();
    }
    pop();
}