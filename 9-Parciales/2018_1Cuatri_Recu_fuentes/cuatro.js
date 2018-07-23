function mostrar()
{
	var numero1;
	var numero2;
	var iguales;
	var numero1Mayor;
	var numero2Mayor;

	numero1=parseInt(prompt("Ingrese el primer número"));
	numero2=parseInt(prompt("Ingrese el segundo número"));
	iguales=numero1+numero2;
	numero1Mayor=numero1/numero2;
	numero2Mayor=numero1+numero2;

	if(numero1 == numero2)
	{
		alert(iguales);
	} 
		else if(numero1 > numero2)
		{
		 	alert(numero1Mayor);
		}
			else if(numero2Mayor < 50)
			{
		 		alert("La suma es "+numero2Mayor+" y es menor a 50");
			}
			else
			{
				alert(numero2Mayor);
			}
}
