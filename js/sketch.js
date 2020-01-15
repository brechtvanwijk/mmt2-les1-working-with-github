
  function setup() {
    createCanvas(390, 550);  
  }
  
  
  function draw(){ 
    background(255,165,82);
    stroke(24);
    noStroke();
    ellipse(300, 60, 55, 55);
   
  function drawWords(x) {
    fill(0);
    Text(brecht, x, 80);
  }    
  
    var rood = color(66,63,65);
    var geel = color(90,83,83);
    var bruin = color(125,112,113);
    var beige = color(160,147,142);
  
    
    push();
    
    fill(geel);
    rect(110,100,100,500);
    fill(geel);
    rect(340,250,60,300);
    fill(beige);
    rect(20,200,100,400);
    fill(bruin);
    rect(260,150,70,300);
    fill(rood);
    rect(0,250,90,300);
    fill(rood);
    rect(200,200,90,500);
    fill(beige);
    rect(280,350,80,200);
    fill(bruin);
    rect(100,340,70,300);

  }
  
  