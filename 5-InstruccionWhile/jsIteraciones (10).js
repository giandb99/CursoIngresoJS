function mostrar()
{

	var contador=0;
	//declarar contadores y variables 

	var numero;
	var sumaNegativos;
	var sumaPositivos;
	var negativos;
	var cantidadNegativos=0;
	var positivos;
	var cantidadPositivos=0;
	var respuesta="si";

	sumaNegativos=0;
	sumaPositivos=0;
	negativos=0;
	positivos=0;

	while(respuesta!="no")
	{
		numero=parseInt(prompt("Ingrese un numero"));

		if(numero < 0)
		{
			negativos++;
			sumaNegativos=sumaNegativos+numero;
			cantidadNegativos=negativos;
		}
		if(numero > 0)
		{
			positivos++;
			sumaPositivos=sumaPositivos+numero;
			cantidadPositivos=positivos;
		}

		respuesta=prompt("Desea seguir? si o no?");
	}

	alert("La suma de negativos es "+sumaNegativos);
	alert("La suma de positivos es "+sumaPositivos);

}//FIN DE LA FUNCIÓN