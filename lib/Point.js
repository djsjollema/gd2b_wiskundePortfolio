class Point {
    constructor(x, y, r, color, draggable) {
        this.x = x;
        this.y = y;
        this.r = r || 10;
        this.color = color || "#ff0000";
        this.draggable = draggable || false;
        this.self = this;
    }

    draw(context) {
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        context.lineWidth = 5;
        context.fill();
        context.stroke();
        context.closePath();
    }

    drag(context) {
      var startDrag = false;

      canvas.addEventListener("mousemove",(evt)=>{
        if(startDrag){
          this.x = getMousePos(canvas,evt).x;
          this.y = getMousePos(canvas,evt).y;
        }

      });

      canvas.addEventListener("mousedown",(evt)=>{
        if(distance(canvas,evt,this.x,this.y) < this.r){
          startDrag = true;
        }
      })

      canvas.addEventListener("mouseup",()=>{
        startDrag = false;
      })

        function getMousePos(canvas, evt) {
            var rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
            };
        };

        function distance(canvas,evt,x,y){
          var dx = getMousePos(canvas,evt).x-x;
          var dy = getMousePos(canvas,evt).y-y;
          return Math.sqrt(dx*dx + dy*dy);
        }
    };
};
