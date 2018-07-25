function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	var promedio;

	while(respuesta == 'si')
	{
		numero=parseInt(prompt("Ingrese un numero"));
		acumulador=acumulador+numero;
		contador++;
		respuesta=prompt("Quiere seguir? 'si' o 'no'");

	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN