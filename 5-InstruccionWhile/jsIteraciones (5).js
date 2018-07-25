function mostrar()
{

	var sexo = prompt("ingrese f ó m .");

	sexo=sexo.toLowerCase();

	// while(sexo != "f" && sexo != "m")
	while(!(sexo == "f" || sexo == "F" || sexo =="m" || sexo=="M"))
	{
		sexo = prompt("Sexo icorrecto, intentelo nuevamente");
		sexo=sexo.toLowerCase();
	}

	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN