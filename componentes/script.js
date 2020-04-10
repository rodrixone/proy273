function log_in(form){
		if(form.userid.value == "roger" && form.password.value =="123")
			location.href = "componentes/musica/musica.html";
		else
			alert("The username and the password are wrong");
}