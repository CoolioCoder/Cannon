class Cannon{
constructor(x,y,width,height, angle){
this.x= x;
this.y= y;
this.height= height;
this.width= width;
    };
    display(){
        fill("black");
        push();
        transalate(this.x, this.y);
        rotate(this.angle)
        rect(-10, -20, this.width, this.height)
        pop();
        arc(this.x-40, this.y+40, 180, 230, PI, TWO_PI)
        noFill();
    }
};
