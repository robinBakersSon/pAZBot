var myText;
var lines;
var showMe;
function setup() {
    // createCanvas(400, 400);  
  lines = loadStrings('poem.txt', poem);
  console.log(lines);
 
}

function draw() {
 // ellipse(50, 50, 60, 60);
// poem();
// noLoop();


}



//create a function to iterate through the poem and make a p element for each line

function poem (){

 var stageGrabber = select('#poemContainer')
for (var i = 0; i < lines.length; i++){
	
	var p = createP(lines[i]);
//assign a class of wordElement to each

p.class('retro');
p.parent(stageGrabber); 



}

}
