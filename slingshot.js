class Ss {
    constructor(a,b){  
    var options={
        bodyA:a,
        pointB:b,
        stiffness:0.04,
        length:50,
    }
    this.b=b
    this.ss= Matter.Constraint.create(options)
    Matter.World.add(world,this.ss)
    }
    break(){
        this.ss.bodyA=null
    }
    display(){
        if(this.ss.bodyA){

        
       push()
        strokeWeight(4)
        var bodya=this.ss.bodyA.position
        var bodyb=this.b
        line(bodya.x,bodya.y,bodyb.x,bodyb.y)
        pop()}
    }
}