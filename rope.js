class Rope{
    constructor(bodyA, pointB){
        
        var options = {
            
            bodyA: bodyA,
            pointB: pointB,
            
          
        }
        this.Sling =Matter.Constraint.create(options);
        this.pointB=pointB
        World.add(world, this.Sling);
    }

    display(){
        if (this.Sling.bodyA){
        var pointA = this.Sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(5)
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }}}
  