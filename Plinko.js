class Plinko {
    constructor(x,y){
        var option={
            isStatic:true,
        }
        this.body=Bodies.circle(x,y,10,option);
        this.radius=10;
        this.color=color(3,0,46)
        World.add(world,this.body);
    }
    display(){
        fill(this.color);
        var pos=this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,10);

    }
}   