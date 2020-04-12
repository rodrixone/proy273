var users = [{
		userid:"roger",
		password: "1234"
	},
	{
		userid:"usera",
		password: "8524"
	}
	];
	
function log_in(form){
	var b = true;
	for(let i =0 ; i < users.length; i++)
		if(form.userid.value == users[i].userid && form.password.value == users[i].password){
		location.href = "componentes/musica/musica.html";
			b = false;
		}	

	
	if(b)
		alert("El ususario o la contraseña son incorrectos");
}