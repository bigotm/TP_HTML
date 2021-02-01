function structure()
{
	var nombre =11;
	if (nombre<10) {
		document.write("inférieur à 10 </br>")

	}
	else{
		document.write("supèrieur à 10 </br>")
	}
}

structure();

function nb(max)
{
	for (var i =0; i <= max; i++) {
		document.write(i+"</br>");
	}
}
nb(10);

function tab()
{
  var body = document.getElementsByTagName("body")[0];
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");


  for (var i = 0; i <= 10; i++) {

    var row = document.createElement("tr");

    for (var j = 0; j <= 10; j++) {

      var cellule = document.createElement("td");
      var celluleTexte = document.createTextNode("cellule num "+i+", colone "+j);
      cellule.appendChild(celluleTexte);
      row.appendChild(cellule);
    }


    tblBody.appendChild(row);
  }


  tbl.appendChild(tblBody);

  body.appendChild(tbl);

  tbl.setAttribute("border", "2");
}
tab();