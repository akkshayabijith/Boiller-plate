class Rubber {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,20, options);
      this.radius = 20
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      stroke("blue");
      strokeWeight(4);
      fill("orange");
      ellipse(0,0, this.radius, this.radius);
      pop();
    }
  }