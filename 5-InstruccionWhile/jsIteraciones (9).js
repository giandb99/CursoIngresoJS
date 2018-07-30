function mostrar()
{

	var contador=0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;
	var respuesta='si';
	//var bandera=0;

	while(respuesta !='no')
	{
		contador++;
		numero=parseInt(prompt("Ingrese un numero #" + contador));
		
		if(contador==1)
		{
			minimo=numero;
			maximo=numero;
			//bandera=1;
		}
		else
		{
			if(numero < minimo)
			{
			minimo=numero;
			}
			
			if(numero > maximo)
			{
			maximo=numero;
			}
		}
		
		respuesta=prompt("Quiere seguir? si o no?");
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;
}//FIN DE LA FUNCIÓN