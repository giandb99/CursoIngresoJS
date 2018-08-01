/*
Ingreso: 
Maria F 15 
Jose M 33
Pepe M 81

Mostrar:
	cantidad
		1- mayores de edad = 2
		2- menores de edad = 1
		3- mujeres = 1
		4- hombres = 2

	nombre	
		5- del mayor edad = Pepe
		6- del menor edad = Maria
		7- del hombre de menor edad = Jose
*/

function mostrar()
{
	var nombre;
	var sexo;
	var edad;
	var contadorMayoresEdad=0;
	var contadorMenoresEdad=0;
	var contadorHombres=0;
	var contadorMujeres=0;
	var nombreMayor;
	var nombreMenor;
	var nombreHombreMenor;
	var mayorEdad;
	var menorEdad;
	var contador=0;
	var edadHombreMenor;
	var flag=0;
	

	while(contador < 3)
	{
		contador++;
		nombre=prompt("Ingrese el nombre");
		sexo=prompt("Ingrese el sexo");
		edad=parseInt(prompt("Ingrese la edad"));
		
		if (edad < 18)
		{
			contadorMenoresEdad++;
		}
		else
		{
			contadorMayoresEdad++;
		}
		
		if (sexo == 'm')
		{
			contadorHombres++;
		}
		else
		{
			contadorMujeres++;
		}

		if (edad > mayorEdad || flag==0)
		{
			mayorEdad = edad;
			nombreMayor = nombre;
		}

		if (edad < menorEdad || flag==0)
		{
			menorEdad=edad;
			nombreMenor=nombre;
			flag=1;
		}
		
		if (sexo == 'm' && contadorHombres == 1)
		{
			nombreHombreMenor = nombre;
			edadHombreMenor = edad;
		}

		if (sexo == 'm' && edad < edadHombreMenor)
		{
			nombreHombreMenor = nombre;
			edadHombreMenor = edad;
		}
	}
	
	document.write("La cantidad de mayores de edad es: " + contadorMayoresEdad + "<br>" );
	document.write("La cantidad de menores de edad es: " + contadorMenoresEdad + "<br>");
	document.write("La cantidad de mujeres es: " + contadorMujeres + "<br>");
	document.write("La cantidad de hombres es: " + contadorHombres + "<br>");
	document.write("El nombre de la persona de mayor edad es: " + nombreMayor + "<br>");
	document.write("El nombre de la persona de menor edad es: " + nombreMenor + "<br>");

	if(contadorHombres==0)
	{
		nombreHombreMenor="No se ingreso ningun hombre";
	}

	document.write("El nombre del hombre de menor edad es: " + nombreHombreMenor + "<br>");
}



