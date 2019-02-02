// ver.1.1  Test Coding 

 var snowcolor;
 var snowR;
 var y;

 let snow;

 function setup() {
   //size(screen.width, screen.height);
   
   createCanvas(640, 480);

   snowcolor = 200;
   y = 0;
   snowR = 5;
   snowspeed = 3;
   
    snow = new objSnow();
   
}

 function draw() {
     // ellipse(150, 150, 80, 80);
   
  
     ellipse(100,y,snowR,snowR);
     y+=snowspeed;
     

    snow.snowdraw();
    
}



 class objSnow {

   constructor () {
      this.speed = 1;
      this.sy = 0;
      this.sx = 130;
      this.fai = 2;
   }
  


   snowdraw() {
      ellipse(this.sx, this.sy, this.fai, this.fai);
      this.sy += random(this.speed);
      this.sx += random(-1*this.speed, this.speed);
   } 
   


 }
