class Raindrops{
    constructor(x, y,r) {
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':1.0
        }
        this.body=Bodies.circle(x,y,r/2,options);
        this.x=x;
        this.y=y;
        this.r=r;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        fill("blue");
        ellipse( 0, 0, this.r);
        pop();
      }
}