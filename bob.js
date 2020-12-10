class Bob{
    constructor(x,y){
        var options = {
            isStatic : false,
            restitution : 1,
            friction : 0.5,
            density : 1.2,
        }
        this.body=Bodies.circle(x,y,30,options);
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        strokeWeight(3);
        stroke("black")
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(0, 0,30);
        pop();

    }

}