function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	parseInt(numero);

	while(!(numero <10 && numero >0))
		{
			var numero = prompt("Numero incorrecto, ingrese un numero valido");
			parseInt(numero);
		}

	document.getElementById('Numero').value=numero;
}//FIN DE LA FUNCIÓN