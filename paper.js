class Paper{
    constructor(x,y,r){
        this.radius=r;
this.image=loadImage("paper.png")
var options={
isStatic:false,
restitution:0.3,
density:1.2,
friction:0.2,

}
this.body=Bodies.circle(x,y,r,options);
World.add(world,this.body);
    }
     display(){

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 60, 60);
        pop();



    }
}