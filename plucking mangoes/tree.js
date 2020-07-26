class tree {
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,30,30,{isStatic:true});
        this.width = 500;
        this.hieght = 500;
         
        World .add(world,this.body);
        this.image = loadImage("pluck/tree.png");
        
    }

    display(){
        var position = this.body.position;
        push ();
        imageMode(CENTER);
        image(this.image,position.x,position.y,this.width,this.hieght);
        pop ();
    }
}
