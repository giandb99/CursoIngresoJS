function mostrar()
{
	var dia;

	dia=prompt("Ingrese un dia de la semana");

	switch(dia)
	{
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
			alert("A trabajar.");
			break;

		case "sabado":
		case "domingo":
			alert("Buen finde.");
			break;

		default:
			alert("No es un dia valido");
	}
}
