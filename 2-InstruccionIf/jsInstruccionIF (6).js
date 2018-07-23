function mostrar()
{
	//tomo la edad  

	var edad;

	edad=parseInt(document.getElementById('edad').value);


	if(edad >= 18)
	{
	 	alert("Es adulto");
	}
	else if (edad <13)
		{
			alert("Es niño");
		}
		else
		{
			alert("Es adolescente");
		}

}//FIN DE LA FUNCIÓN