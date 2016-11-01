class NumberPair {
    constructor(a, b) {
        this.a = a;
        this.b = b;

    };

    division() {
        return this.a / this.b;
    };

    longDivision() {
        var ans = "";
        var dividend = this.a;
        var divisor = this.b;
        var quotient = Math.floor(dividend / divisor);
        var rest = dividend % divisor;
        var rests = [];
        var quotients = [];

        ans = quotient + ".";

        while (rests.indexOf(rest) == -1) {
            rests.push(rest);
            dividend = rest * 10;
            quotient = Math.floor(dividend / divisor);
            rest = dividend % divisor;
            quotients.push(quotient);
            //ans = ans + quotient;
        }
        quotients.splice(rests.indexOf(rest), 0, "[");
        quotients.push("]");
        ans += quotients.join("");

        return ans;
    }
    gcd() {
        let ans;
        let a = this.a,
            b = this.b,
            t;
        while (b != 0) {
            t = b;
            b = a % b;
            a = t;
        }
        ans = a;
        return ans;
    }
}

class Ratio extends NumberPair {
    constructor(a, b) {
        super(a, b);
        this.dividend = a;
        this.divisor = b;
    }
    add(ratio) {
        let dividend = this.dividend * ratio.divisor + ratio.dividend * this.divisor;
        let divisor = this.divisor * ratio.divisor;
        var ans = new Ratio(dividend, divisor);
        return ans;
    }

  simplify(){
    let dividend = this.dividend/this.gcd();
    let divisor = this.divisor/this.gcd();
    let ans = new Ratio(dividend,divisor);
    return ans;
  }
}
