class ground {
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,30,30,{isStatic:true});
        this.width = 1000;
        this.hieght = 10;
         
        World .add(world,this.body);
        
        
    }

    display(){
        var position = this.body.position;
        push ();
        rectMode(CENTER);
        fill ("red");
        rect(position.x,position.y,this.width,this.hieght);
        pop ();
    }
}
