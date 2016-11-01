var a_up = document.getElementById("a_up");
var a_down = document.getElementById("a_down");
var b_up = document.getElementById("b_up");
var b_down = document.getElementById("b_down");
var c_up = document.getElementById("c_up");
var c_down = document.getElementById("c_down");
var isButton = document.getElementById("isButton");
var a,b,c;

isButton.addEventListener("click",()=>{
  a = new Ratio(a_up.value,a_down.value);
  b = new Ratio(b_up.value,b_down.value);
  c = a.add(b);
  c_up.value = c.dividend;
  c_down.value = c.divisor;
})

var a= new Ratio(1,2);
var b = new Ratio(2,3);

c = a.add(b);
console.log(c);
