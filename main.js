data = ['Book','Binoculars','Cup','Face'];
colour = "black";


    random_no = Math.floor((Math.random()*data.length) + 1);
    console.log(data[random_no]);
    console.log(data);
    sketch = data[random_no];
    console.log(sketch);
    document.getElementById("sketch_draw").innerHTML='Object to draw: '+ sketch;
    
    time_counter = 0;
    time_check = "";
    drawn_sketch = "";
    answer_holder = "";
    score = 0;

    function update_canvas(){
        background("white");
        random_no = Math.floor((Math.random()*data.length) + 1);
        console.log(data[random_no]);
        console.log(data);
        sketch = data[random_no];
        console.log(sketch);
        document.getElementById("sketch_draw").innerHTML='Object to draw: '+ sketch;
    }

function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}

function setup(){
    canvas = createCanvas(550, 450);
    canvas.position(480,250);
    background('white');
    // synth = window.speechSynthesis;
}

function draw(){
    stroke(colour);
    if(colour == "white"){
        strokeWeight(15);
    }
    else{
        strokeWeight(5);
    }
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
    
    if (drawn_sketch == sketch){
        answer_holder = "set";
        score++;
        document.getElementyId("score").innerHTML="Score: " + score;
    } 
}

function send(){
    classifier.classify(canvas, gotResult);
}

function gotResult(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        
        drawn_sketch = results[0].label;
        document.getElementById("label").innerHTML = "Label: " + results[0].label;
        document.getElementById("confidence").innerHTML = "Confidence: " + Math.round(results[0].confidence*100) + "%" ;
    }
}

function check_sketch(){
    time_counter++;
    document.getElementById("time").innerHTML= "Timer: " + time_counter;
}

function next(){
    g();
    clear1();
    document.getElementById("label").innerHTML = "Object:";
    document.getElementById("confidence").innerHTML = "Confidence:";
}
function clear1(){
    background("white");
}
function erase(){
    colour = "white";
}
function pencil(){
    colour = "black";
}


