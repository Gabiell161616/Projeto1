function setup() {
    createCanvas(800, 800);
    background("black");
    
  }
  
  function draw() {
    
    stroke("purple");
    fill("gray");
    
    if(mouseIsPressed){
      rect(mouseX, mouseY, 10, 10);
    }
  }