function setup() {
    createCanvas(500, 500);
    background("black")
  }
  
  function draw() {
    
    stroke("blue")
    
    //console.log(mouseIsPressed);
    if (mouseIsPressed) {
    fill("red")
    rect(mouseX, mouseY, 20, 15 );
        }
            
  }