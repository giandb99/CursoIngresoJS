/*
iterar el ingreso varios libros con cuatro datos por cada libro
		nombre
		cantidad de páginas
		cantidad de ventas (0 o más)
		tema (posibles temas: “robótica", "programación", "patrones", "base de datos”)

validar e ingresar datos hasta que el usuario quiera.

informar al terminar el ingreso por document.write:
		a) La cantidad de libros con páginas pares. 
		b) La cantidad de libros con páginas impares. 
		c) La cantidad de ceros ventas. 
		d) El promedio de todas las ventas ingresadas. 
		e) La suma de todas las páginas de los de "programación".
*/
function mostrar()
{
	var nombre;
	var cantidadPaginas;
	var ventas;
	var tema;
	var contador=0;
	var respuesta="si";
	var librosConPaginasPares=0;
	var librosConPaginasImpares=0;
	var cantidadCeroVentas=0;
	var acumuladorVentas=0;
	var promedio;
	var sumaPaginasProgramacion=0;

	while(respuesta=="si")
	{
		nombre=prompt("Ingrese el nombre del libro #"+contador);

		cantidadPaginas=parseInt(prompt("Ingrese la cantidad de paginas del libro #"+contador));
		while(cantidadPaginas<0)
		{
			cantidadPaginas=parseInt(prompt("Error. Reingrese la cantidad de paginas del libro #"+contador));
		}

		ventas=parseInt(prompt("Ingrese la cantidad de ventas del libro #"+contador));
		while(ventas<0)
		{
			ventas=parseInt(prompt("Error. Reingrese la cantidad de ventas del libro #"+contador));
		}

		tema=prompt("Ingrese el tema del libro #"+contador+": (Robotica-Programacion-Patrones-Base de datos)");

		if(cantidadPaginas%2==0 && cantidadPaginas!= 0)
		{
			librosConPaginasPares++;
		}
		else if(cantidadPaginas%2==1)
		{
			librosConPaginasImpares++;
		}

		if(ventas==0)
		{
			cantidadCeroVentas++;
		}

		if(tema=="programacion")
		{
			sumaPaginasProgramacion=sumaPaginasProgramacion+cantidadPaginas;
		}

		acumuladorVentas=acumuladorVentas+ventas;
		contador++;
		respuesta=prompt("Quiere continuar?");
	}

	promedio=acumuladorVentas/contador;

	document.write("<br> La cantidad de libros con páginas pares es: "+librosConPaginasPares);
	document.write("<br> La cantidad de libros con páginas impares es: "+librosConPaginasImpares);
	document.write("<br> La cantidad de ceros ventas es: "+cantidadCeroVentas);
	document.write("<br> El promedio de la cantidad de ventas es: "+promedio);
	document.write("<br> La suma de las paginas de libros de programacion es: "+sumaPaginasProgramacion);
}