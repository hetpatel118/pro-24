class Rubber{
    constructor(x, y, r) {
      var options = {
        'density':3,
        'friction': 3,
        'restitution':0.5
      };
      this.body = Bodies.circle(x, y,r, options);
      this.radius = r;
      this.x = x;
	  this.y = y;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('black')
      fill('gray')
      ellipseMode(RADIUS)
      ellipse(0, 0, this.radius,this.radius);
      pop();
    };
  };
	
	