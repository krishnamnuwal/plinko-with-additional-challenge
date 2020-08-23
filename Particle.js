class Particle{
    constructor(x,y){
        var option={
            restitution:0.4,
            density:10,
        }
        this.body=Bodies.circle(x,y,15,option);
        this.radius=15;
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body);
    }
    display(){
        fill(this.color);
        var angle=this.body.angle
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
       
        ellipseMode(RADIUS);
        ellipse(0,0,15);
        pop();
    }
}