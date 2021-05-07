class Tree {
    constructor(x, y) {
       
        this.x=x;
        this.y=y;
        this.dustbinWidth=450;
        this.dustbinHeight=600;
        this.wallthickness=10;
        this.image=loadImage("tree.png");
        this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallthickness, { isStatic:true });
        this.leftWallBody = Bodies.rectangle(this.x-this.dustbinWidth / 2 ,this.y- this.dustbinHeight / 2,this.wallthickness,this.dustbinHeight, { isStatic: true })
       
        this.rightWallBody = Bodies.rectangle(this.x+this.dustbinWidth / 2 ,this.y- this.dustbinHeight / 2, this.wallthickness,this.dustbinHeight, { isStatic:true })
        

        
        World.add(world, this.bottomBody);
        World.add(world, this.leftWallBody);
        World.add(world, this.rightWallBody)
    }
    display(){
     
      var posleft=this.leftWallBody.position;
     
    
      
      push();
      translate(posleft.x,posleft.y);
      
      fill("red");
      stroke(4);
      imageMode(CENTER);

      image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight);
      
      pop();
      
    }

}