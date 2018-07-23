function mostrar()
{
	var numero1;
	var numero2;
	var iguales;
	var numero1Mayor;
	var numero2Mayor;

	numero1=parseInt(prompt("Dame el primer numero"));
	numero2=parseInt(prompt("Dame el segundo numero"));
	iguales=numero1+numero2;
	numero1Mayor=numero1-numero2;
	numero2Mayor=numero1+numero2;

if(numero1 == numero2)
{
	alert(iguales);
}
	else if(numero1 > numero2)
	{
		alert(numero1Mayor);
	}
	else if(numero2Mayor > 10)
	{
		alert("La suma es "+numero2Mayor+" y superó el 10");
	}
	else
	{
		alert(numero2Mayor);
	}
}
