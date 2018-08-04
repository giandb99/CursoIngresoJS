function Mostrar()
{
	var numero1;
	var numero2;
	var suma;

	numero1=parseInt(prompt("Ingrese un numero"));
	numero2=parseInt(prompt("Ingrese un numero"));
	suma=numero1+numero2;

	if(suma>0)
	{
		document.write("<br> El resultado de la suma es positivo: "+suma);
	}
	else if(suma<0)
		{
			document.write("<br> El resultado de la suma es negativo: "+suma);
		}	
		else
		{
			document.write("<br> El resultado es 0");
		}
}
