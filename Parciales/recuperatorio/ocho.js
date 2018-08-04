function Mostrar()
{
	var numero;
	var respuesta="si";
	var maximo;
	var minimo;
	var flag=0;
	var cantidadPares=0;
	var contadorIngreso=0;
	var suma=0;

	while(respuesta=="si")
	{
		numero=parseInt(prompt("Ingrese un numero"));
		while(numero<=0)
		{
			numero=parseInt(prompt("Error, reingrese el numero"));
		}
		if(numero%2==0)
		{
			cantidadPares++;
		}
		
		if(numero>maximo || flag==0)
		{
			maximo=numero;
		}
		if(numero<minimo || flag==0)
		{
			minimo=numero;
			flag=1;
		}

		contadorIngreso++;
		suma=suma+numero;
		respuesta=prompt("Desea continuar?");
	}

	promedio=suma/contadorIngreso;

	document.write("<br> Cantidad de pares: "+cantidadPares);
	document.write("<br> Promedio: "+promedio);
	document.write("<br> La suma es: "+suma);
	document.write("<br> El maximo es: "+ maximo+ ". El minimo es: "+minimo);
}
