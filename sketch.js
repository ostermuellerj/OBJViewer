var inc = 0;
var coords = 
    [
        "0 0 0",
        "0 100 0",
        "0 100 100",
        "0 0 100",        
        "100 0 100",        
        "100 0 0",
        "100 100 0",
        "100 100 100"
    ]

var prev = "";
var model1;
var doRotate = false,
    drawPoints = false,
    drawModel = true,
    drawOBJ = true;


//runs once before setup
function preload() {
    model1 = loadModel('objs/star.obj');
}

//runs once before draw
function setup() {
//    createCanvas(600, 400, WEBGL);
    var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    
    canvas.parent('sketch-container');
}

//executes every frame
function draw() {
    console.log(doRotate);
    orbitControl();
    
    rotateY(inc/200); 
    
    if (doRotate) inc++;
    
    background(240);
    fill(255,255,255,100);
    
    if (drawPoints) {
        push();
            translate(-50,-50,0);
            drawShape();
            drawSpheres();
        pop();
    }
    if (drawOBJ){
        scale(200);
        model(model1);
    }
}

//gets input from text box, adds to coords array and prints to console
function addPoint() {
    var inp = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = inp;
    
    if (inp != prev) {
        coords.push(inp);
        prev=inp;
    }
}

//draws polys between each point in "coords"
function drawShape() {
    beginShape();
    for (var i=0; i<coords.length; i++) {
        vertex(coords[i].split(" ")[0], coords[i].split(" ")[1], coords[i].split(" ")[2]);
    }
    endShape();
}

//draws a sphere for each coord in "coords"
function drawSpheres (){
    for (var i=0; i<coords.length; i++) {
        push();
            translate(coords[i].split(" ")[0], coords[i].split(" ")[1], coords[i].split(" ")[2]); 
            sphere(4);
        pop();
    }
}

function clearPoints() {
    coords = [];
}

function toggle(type) {
    switch (type) {
        case 0:
            doRotate = !doRotate;
            break;
        case 1:
            drawPoints = !drawPoints;
            break;
        case 2:
            drawOBJ = !drawOBJ;
            break;           
    }
}

function windowResized() {
  canvas = resizeCanvas(windowWidth, windowHeight);
}
