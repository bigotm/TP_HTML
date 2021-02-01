function same()
{
document.formulaire.champ_2.value=document.formulaire.champ_1.value;

}

function capi(p){
var capitale=""
switch (p) {
 case "1" : capitale= "Paris"
            break;
 case "2" : capitale= "Madrid"
            break;
 case "3" : capitale= "Tokyo"
            break;
 case "4" : capitale= "Ottawa"
            break;
 default:   capital="";}
 document.getElementsByName("txtCapitale")[0].value=capitale;

}


	
var rep = new Array;

var faite = new Array;

var score = 0;

rep[1] = "c";

rep[2] = "a";

rep[3] = "b";

function result(quest)
{
	if (!faite[quest]) {

		faite[quest] = -1;

		score++;

	}
	else { 
		alert("Tu as déjà répondu à cette question !");

	}
}

function scoree()
{
	document.write("ton score est "+ score+" sur 3")
}
 
 