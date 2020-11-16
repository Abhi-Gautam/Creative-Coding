let network = [];
let nLayers = 9;

function setup() {
    createCanvas(925, 500);
    fill(250);
    let x = 150;
    let interLayer = (width-300)/(nLayers-3);
    network.push([createVector(150-interLayer, height/2)]);
    for(let i = 0; i < nLayers-2; i++)
    {
        let layer = [];
        let nNodes = floor(random(5, 15));
        let interNode = 20;
        let y = height/2 - floor(nNodes/2)*interNode;

        for(let j = 0; j < nNodes; j++){
            layer.push(createVector(x, y));
            y += interNode;
        }
        network.push(layer);
        x += interLayer;
    }
    network.push([createVector(width-150+interLayer, height/2)]);
}

function draw() {
    background(48, 52, 63);
    for(let i = 0; i < nLayers-1; i++)
    {
        let l1 = network[i];
        let l2 = network[i+1];
        for(let node1 of l1)
        {
            circle(node1.x, node1.y, 5);
            for(let node2 of l2)
            {
                let noice = noise(i, node1.y+node2.y, frameCount/100);

                strokeWeight(0.6+noice);
                stroke(7, 190, 184, noice*250);
                line(node1.x, node1.y, node2.x, node2.y);
            }
        }
    }

    let lastNode = network[nLayers -1][0];
    circle(lastNode.x, lastNode.y, 5);
    noStroke();
}
