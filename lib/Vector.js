class Vector{
    constructor(dx,dy){
        this.dx = dx;
        this.dy = dy;
    }
    magnitude(){
      return math.sqrt(this.dx*this.dx + this.dy*this.dy);
    }
    angle(){
      return math.atan2(this.dy,this.dx);
    }

    scalarMultiplication(scalar){
      var ans = new Vector(scalar * this.dx,scalar*this.dy);
      return ans;
    }

    normalize(){
      this.dx = this.dx/this.magnitude();
      this.dy = this.dy/this.magnitude();
    }

    add(vector){
      var ans = new Vector(this.dx + vector.dx, this.dy+vector.dy);
      return ans;
    }

    substract(vector){
      var ans = new Vector(this.dx - vector.dx, this.dy - vector.dy);
      return ans
    }
}
