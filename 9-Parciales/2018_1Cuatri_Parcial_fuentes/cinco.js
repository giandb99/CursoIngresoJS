function mostrar()
{
	var planeta;

	planeta=prompt("Ingrese un planeta del sistema solar");

	switch(planeta)
	{
		case "mercurio":
		case "venus":
			alert("Aca hace más calor.");
			break;

		case "tierra":
			alert("Acá vivimos.");
			break;

		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
			alert("Acá hace mas frio");
			break;

		default: 
			alert("Ingrese un planeta válido");
	}
}
