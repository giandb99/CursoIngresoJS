function Mostrar()
{
	var mes;

	mes=prompt("Ingrese un mes");
	mes=mes.toLowerCase();
	
	switch(mes)
	{
		case"enero":
			alert("Comienza el año");
			break;

		case"diciembre":
			alert("Se vienen las fiestas");
			break;

		default:
			alert("No es Enero ni Diciembre");
	}
}