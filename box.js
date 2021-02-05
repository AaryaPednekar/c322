class Box {
  constructor(x,y,width,height)  {
    var options={
        isStatic:false
    }
    this.width = width
    this.height = height
    this.body = Bodies.rectangle(x,y,width,height,options)
    
    this.Visibility = 255
    World.add(world,this.body)
}

display()  {
     if(this.body.speed < 5){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill("yellow")
      rect(0,0,30,40);
      pop();
      
      }
    
      else{
     World.remove(world, this.body);
     push();
     this.Visibility = this.Visibility - 5;
     tint(255,this.Visibility);
     pop();
      }
     
    }
    score(){
      if(this.Visibility<0 && this.Visibility >-105){
        score++
      }
    }
}
