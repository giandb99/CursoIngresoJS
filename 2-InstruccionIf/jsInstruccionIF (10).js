function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota=Math.floor((Math.random()*10)+1);
	
	alert(nota);

	if(nota == 9 || nota==10)
	{
		alert("Excelente.");
	}
	else if (nota>=4)
		{
			alert("Aprobó.");
		}
		else
		{
			alert("Vamos, la próxima se puede.");
		}

}//FIN DE LA FUNCIÓN