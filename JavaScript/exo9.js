function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validate() {
    var email = document.getElementById("email").value;
         
    if (checkEmail(email)) {
        alert('Adresse e-mail valide');
    } else {
        alert('Adresse e-mail non valide');
    }
    return false;
}



function Phone(num){


	var re = /^0[1-7]\d{8}$/;
	return re.test(num);
}

function validateNum()
{
	var num = document.getElementById("num").value;
	if(Phone(num)){
		alert('Bon num');
	}
	else {
		alert('Mauvais num');
	}
	return false

}

function pasuser(form) {
	var login = "user"
	var pass = "compliqué"
	if (form.id.value==login) { 
		if (form.pass.value==pass) {              
			location="exo8.html" 
		}
		else {
			alert("C'est pas le bon mdp (indice: le mot de passe est compliqué)")
		}
	}
	else {
		alert("pas le bon login indice: user")
	}
	}


