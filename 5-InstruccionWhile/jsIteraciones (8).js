function mostrar()
{

	var contador=0;
	var acumulador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';

	while(respuesta == 'si')
	{
		numero=parseInt(prompt("Ingrese un numero"));
		acumulador=acumulador+numero;
		if(numero > 0)
		{
			positivo=parseInt(positivo+numero);
		}
		else
		{
			negativo=parseInt(negativo*numero);
		}
		contador++;
		respuesta=prompt("Quiere seguir? 'si' o 'no'");
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;
}//FIN DE LA FUNCIÓN