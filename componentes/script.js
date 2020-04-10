function log_in(form){
		if(form.userid.value == "roger" && form.password.value =="123")
			location.href = "https://www.google.com/";
		else
			alert("The username and the password are wrong");
}