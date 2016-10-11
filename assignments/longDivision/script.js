var content = document.getElementById("content");

var myTable = document.createElement('table');
myTable.border = "1";
myTable.cellPadding = "4";
var np; ;

for(let i= 1; i<=100; i++){
  np = new NumberPair(1,i);
  myRow = myTable.insertRow();
  myRow.insertCell().innerHTML = "1/" + i + " = " + np.longDivision();
}
content.appendChild(myTable);
