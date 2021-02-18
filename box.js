class Box{
constructor(x,y,width,height)
{

    var options = {
        "isStatic" : false,
        "restitution" : 0.8,
        "friction" : 0.4,
        "density" : 0.1
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;

    World.add(world,this.body);




}



    display()
    {
        var position = this.body.position;

        push();

        translate(position.x,position.y);
        rotate(this.body.angle);

        strokeWeight(4);
        stroke(255,108,255);
        fill("cyan");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);

        pop();


    }
    














};