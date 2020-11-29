class Brick {
    constructor(x,y,width,height) {
      var options = {
          stiffness:0.8,
          friction:5.0,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
       
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      rectMode(CENTER);
      push(); 
      rect(pos.x, pos.y, this.width, this.height);
      pop(); 
    }
  };
