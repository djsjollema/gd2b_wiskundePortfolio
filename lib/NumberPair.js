class NumberPair{
    constructor(a,b){
        this.a =a ;
        this.b = b;

    };

    division(){
        return this.a / this.b;
    };

    longDivision(){
        var ans = "";
        var divident = this.a;
        var divisor = this.b;
        var quotient = Math.floor(divident/divisor);
        var rest = divident%divisor;
        var rests = [];
        var quotients = [];

        ans = quotient + ".";

        while(rests.indexOf(rest)==-1){
          rests.push(rest);
          divident = rest * 10;
          quotient = Math.floor(divident/divisor);
          rest = divident%divisor;
          quotients.push(quotient);
          //ans = ans + quotient;
        }
        quotients.splice(rests.indexOf(rest),0,"[");
        quotients.push("]");
        ans += quotients.join("");

        return ans;
    }
}
