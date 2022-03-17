data = ['Book','Binoculars','Pants','Face'];


function load(){
    random_no = Math.floor(Math.random()*data.length);
    console.log(random_no);
    console.log(data);
    sketch = data[random_no];
    console.log(sketch);
    document.getElementById("sketch_draw").innerHTML='Object to draw: '+ sketch;
    time_counter = 0;
    time_check = "";
    drawn_sketch = "";
    answer_horlder = "";
    score = 0;
}
function setup(){
    canvas = createCanvas(500, 450);
    canvas.position(525,200);
    background('white');
    canvas.mouseReleased(classifyCanvas());
    synth = window.speechSynthesis;
}
function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}
function draw(){
    Image(canvas, 500, 450, 525, 200);  
    canvas; 
}
function classifyCanvas(){
    classifier.classify(canvas, gotResults);
}

