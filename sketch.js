var gui; 

var inc = 0;

var prev = "";
var star, cube, pyramid;
var doRotate = false,
    doFill = false,
    doStroke = true,
    drawPoints = false,
    drawModel = true,
    drawOBJ = true;
var File = ['star.obj','cube.obj']
var rotSpeed=0.001,
    rotSpeedMin=rotSpeed,
    rotSpeedMax=0.05,
    rotSpeedStep=0.001;
var fillColor = '#ffffff',
    strokeColor = '#ff0000';

//runs once before setup
function preload() {
    star = loadModel("objs/star.obj");
    cube = loadModel("objs/cube.obj");    
//    pyramid = loadModel("objs/pyramid.obj");
}

//runs once before draw
function setup() {

//    createCanvas(600, 400, WEBGL);
    var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    
    gui = createGui('SETTINGS', 0, windowHeight-390);
    gui.addGlobals('rotSpeed', 'doRotate', 'drawOBJ', 'File', 'doFill', 'fillColor', 'doStroke', 'strokeColor');
//    sliderRange(0, 0.1, 0.0001);
}

//executes every frame
function draw() {
//    console.log(doRotate);
    orbitControl();
    
    rotateY(-PI/2);
    rotateZ(PI/6);
    rotateY(inc*rotSpeed); 
    
    if (doRotate) inc++;
    
    background(240);
    fill(255,255,255,100);
    
    noFill();
    if(doFill) fill(fillColor);
    stroke(strokeColor);
    
    if (drawOBJ){
        scale(100);
        switch(File) {
		  case 'star.obj':
		    model(star);
            break;
            
		  case 'cube.obj':
		    model(cube);
            break;
            
//		  case 'pyramid.obj':
//		    model(pyramid);
//            break;
		}    
//        model(star);
    }
}

function windowResized() {
  canvas = resizeCanvas(windowWidth, windowHeight);
}


