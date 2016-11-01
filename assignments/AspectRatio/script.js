let inputButton = document.getElementById("inputButton");
let myImage = document.getElementById("myImage");
let inputBox = document.getElementById("inputBox");
var source;
let ratio;

inputButton.addEventListener("click",()=>{
  let source = inputBox.value;
  myImage.src = source;
  myImage.addEventListener("load",()=>{
    ratio = new Ratio(myImage.height,myImage.width);
    console.log(ratio.simplify())
    //alert(ratio.simplify());
  })
})
