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
	var edad;
	var sexo;
	var contador;
	var contadorMayoresEdad;
	var contadorMenoresEdad;

	contador=0;
	contadorHombres=0;
	contadorMujeres=0;
	contadorMayoresEdad=0;
	contadorMenoresEdad=0;

	while(contador < 3)
	{
		contador++;
		nombre=prompt("Ingrese el nombre");
		sexo=prompt("Ingrese el sexo");
		while(sexo!='f' && sexo !='m')
		{
			sexo=prompt("Error. Reingrese el sexo");
			if(sexo=='f')
			{
				contadorMujeres++;
			}
			else
			{
				contadorHombres++;
			}
		}
		
		edad=parseInt(prompt("Ingrese la edad"));
		while(edad < 0 || edad > 100)
		{
			edad=parseInt(prompt("Error. Reingrese la edad"));
			if(edad > 18)
			{
				contadorMayoresEdad++;
			}
			else
			{
				contadorMenoresEdad++;
			}
		}
	}

	document.write("<br>  La cantidad de mayores de edad es: "+cantidadMayoresEdad);
	document.write("<br>  La cantidad de menores de edad es: "+cantidadMenoresEdad);
	document.write("<br>  La cantidad de mujeres es: "+cantidadMujeres);
	document.write("<br>  La cantidad de hombres es: "+cantidadHombres);
}



