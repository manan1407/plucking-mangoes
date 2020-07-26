class stone {
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,30,30,{isStatic:true,restitution:0,frction:1,density:1.2});
        this.width = 40;
        this.hieght = 40;
         
        World .add(world,this.body);
        this.image = loadImage("pluck/stone.png");
        
    }

    display(){
        var position = this.body.position;
       
        
        push ();
        imageMode(CENTER);
        image(this.image,position.x,position.y,this.width,this.hieght);
        pop ();
    }
}
