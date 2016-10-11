var myTable = document.getElementById('myTable');
var table = document.createElement('table');
var maxNum = 1000;
for(let i=1;i<maxNum;i++){
  var tr = document.createElement('tr');
  table.appendChild(tr);
  var td0 = document.createElement('td');
  tr.appendChild(td0);
  td0.appendChild(document.createTextNode(i));
  var td1 = document.createElement('td');
  tr.appendChild(td1);
  td1.appendChild(document.createTextNode(i.divisors()));
  var td2 = document.createElement('td');
  tr.appendChild(td2);
  td2.appendChild(document.createTextNode(i.divisors().length));  

}

myTable.appendChild(table);
