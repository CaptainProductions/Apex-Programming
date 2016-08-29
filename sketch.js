var state = "menu";
var w = 255;

function setup() {
  noStroke();
    var density = displayDensity();
  pixelDensity(density);
  mouse = createVector(mouseX, mouseY);
  state = "menu";
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  
  sz = min(width, height)/1050;
    buttons = {
    "menu": [new Button(-75, 340, "About", "about"), new Button(-250, 340, "Games", "games"), new Button(100, 340, "Members", "members")],
    "games": [new Button(-(width/2 / sz) + 100, (height/2 / sz) - 100, "Back", "menu")],
    "about": [new Button(-(width/2 / sz) + 100, (height/2 / sz) - 100, "Back", "menu")],
    "members": [new Button(-(width/2 / sz) + 100, (height/2 / sz) - 100, "Back", "menu")],
  }
}

function a(x,y,size,r) {
    push();
    translate(x,y);
    scale(size);
    rotate(r);
    strokeWeight(12);
    stroke(124, 153, 129);
    line(-25,0,0,-45);
    stroke(150,182,155);
    line(25,0,0,-45);
    stroke(173, 201, 177);
    line(-25,0,25,0);
    
    
    pop();
    
};
function draw() {
    noStroke();
  background(255,255,255);


  cursor(ARROW);
  
  push();
  translate(width/2, height/2);
  mouse.set((mouseX - width/2) / sz, (mouseY - height/2) / sz);
  scale(sz);
  textAlign(CENTER,CENTER);
  switch(state) {
  
  case "menu":
      
      a(0,150,9,0);
      fill(255,255,255,150);
      rect(-width,-height,width*200,height*200);
      textFont("Dosis");
      textSize(100);
      
      noStroke();
      fill(0,0,0,20);
      text("A P E X\nP R O G R A M M I N G",0,-295);
      fill(149, 179, 153);
      text("A P E X\nP R O G R A M M I N G",0,-300);
      textSize(20);
      text("Website designed by Captain Productions",-450,500);

  break;
  case "games":
      
      a(0,150,9,0);
      fill(255,255,255,150);
      rect(-width,-height,width*200,height*200);
      textFont("Dosis");
      textSize(100);
      noStroke();
      fill(0,0,0,20);
      text("O U R    G A M E S",0,-295);
      fill(149, 179, 153);
      text("O U R    G A M E S",0,-300);
      
      textSize(50);
      text("We haven't made anything yet, but will soon!",0,0);
      
  break;
  case "about":
      
      a(0,150,9,0);
      fill(255,255,255,150);
      rect(-width,-height,width*200,height*200);
      textFont("Dosis");
      textSize(100);
      noStroke();
      fill(0,0,0,20);
      text("A B O U T    U S",0,-295);
      fill(149, 179, 153);
      text("A B O U T    U S",0,-300);
      
      textSize(40);
      text("Apex Programming is a small but talented group of programmers,\n founded on June 7th 2O16. 2 programmers,\n KingKhanOO7 and πceratops came together to start this programming group.\n Unlike many other programming clubs, we try to keep\n our number small and stay productive.",0,0);   
  break;
  case "members":
      
      a(0,150,9,0);
      fill(255,255,255,150);
      rect(-width,-height,width*200,height*200);
      textFont("Dosis");
      textSize(100);
      noStroke();
      fill(0,0,0,20);
      text("M E M B E R S",0,-295);
      fill(149, 179, 153);
      text("M E M B E R S",0,-300);
      
      textSize(40);  
     
      text("Apex Programming has an impressive bank of programmers to draw from,\nwith talents ranging from incredible game mechanics to eye-shattering graphics.",0,-180);
    
      text("Founder: KingKhanOO7\nCo-Founder-πceratops\nGraphics Designers - Captain, Chester Banks\nLendary Programmer - Infiltration\nLead Programmer - Thomas Li\nProgrammer - Matthias, Grandzam\nIntern - Code Lord",0,100);
  break;
  }
  for (var i in buttons[state]) {
    buttons[state][i].display();
  }
  rectMode(CORNER);
  fill(255, 255, 255, w);
  rect(-width, -height, width*2, height*2);
  
  pop();

  w = constrain(w, 1, 255);
  w /= 1.05;
}

var Button = function(x,y,txt,dest) {
    this.x = x;
    this.y = y;
    this.txt = txt;
    this.dest = dest;
    this.gray= 250;
    
    this.display = function() {
        rectMode(CORNER);
        noStroke();
        fill(this.gray);
        rect(this.x,this.y,150,75);
        noStroke();
        fill(149, 179, 153);
        textSize(28);
        textFont("Dosis");
        textAlign(CENTER,CENTER);
        text(this.txt,this.x+75,this.y+37.5);
        
        if(mouse.x > this.x && mouse.x < this.x + 150 && mouse.y > this.y && mouse.y < this.y + 75) {
            cursor(HAND);
            this.gray -=1;
        } else {
            this.gray +=1;    
        }
        this.gray = constrain(this.gray,245,250);
    }
  this.onClick = function() {
    if (mouse.x > this.x && mouse.x < this.x + 150 && mouse.y > this.y && mouse.y < this.y + 75) {
      w = 255;
      state = this.dest;
    }
    
  }
};
function mouseClicked() {
  for (var i in buttons[state]) {
    buttons[state][i].onClick();
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  sz = min(width, height)/1050;
    buttons = {
    "menu": [new Button(-75, 340, "About", "about"), new Button(-250, 340, "Games", "games"), new Button(100, 340, "Members", "members")],
    "games": [new Button(-(width/2 / sz) + 100, (height/2 / sz) - 100, "Back", "menu")],
    "about": [new Button(-(width/2 / sz) + 100, (height/2 / sz) - 100, "Back", "menu")],
    "members": [new Button(-(width/2 / sz) + 100, (height/2 / sz) - 100, "Back", "menu")],
  }
}
