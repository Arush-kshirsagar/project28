class Mango{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
       this.r=radius
        
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        this.image = loadImage("mango.png");
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        ellipseMode(CENTER)
        image(this.image, 0, 0, this.r*2,this.r*2);
        
        
        pop();
    }
}