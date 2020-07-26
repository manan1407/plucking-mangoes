class Mango {
    constructor (x,y){
    this.body = Bodies.circle(x,y,30,{isStatic:true,restitution:0,friction:1});
    this.radius = 150;
    World.add(world,this.body);
    this.image = loadImage("pluck/mango.png");
}

    display(){
        var position = this.body.position;

        push ();
        imageMode(CENTER);
        image(this.image,position.x,position.y,50,50);
        pop ();
    }
}