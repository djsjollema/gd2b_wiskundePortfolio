class Point{
    constructor(x,y,r,color){
        this.x = x;
        this.y = y;
        this.r = r || 10;
        this.color = color || "#ff0000";
    }
    
    draw(context){
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x,this.y,this.r,0,2*Math.PI);
        context.lineWidth= 5;
        context.fill();
        context.stroke();
        context.closePath();
    }
}