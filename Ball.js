class Ball {
    constructor(x, y) {
      var options = {
          'isStatic':false,
          'restitution':1.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, 10, 10, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;

      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("purple");
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }