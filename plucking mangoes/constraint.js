class constraint {
    constructor(bodyA,bodyB){
        var options ={
            bodyA : bodyA,
            bodyB : bodyB,
            length : 0,
            stiffness : 0.7
        }

        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

   fly () {
        this.chain.bodyA = null;
    }

    display(){

        if(this.chain.bodyA != null) {
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;
        push ();
        strokeWeight(3);
        line (posA.x,posA.y,posB.x,posB.y);
        pop ();
        }
    }
}