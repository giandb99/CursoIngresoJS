/* 
Ingresar por prompt:
	a) edades (validar entre 0 y 100)
	b) sexo (validar el sexo “f” o “m”) 

		mostrar:
			a) el promedio de edad
			b) la edad más baja
			c) la cantidad de varones que su edad sea mayor o igual a 20
*/

function Mostrar()
{
	var edad;
	var sexo;
	var i;
	var suma=0;
	var promedio;
	var minimo;
	var flag=0;
	var cantidadVarones=0;

	for(i=0;i<100;i++)
	{
		edad=parseInt(prompt("Ingrese la edad"));
		while(edad<0 || edad>100)
		{
			edad=parseInt(prompt("Error, reingrese la edad"));
		}

		sexo=prompt("Ingrese el sexo");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Error, reingrese el sexo");
		}

		suma=suma+edad;

		if(edad<minimo || flag==0)
		{
			minimo=edad;
			flag=1
		}
		
		if(sexo=="m" && edad>=20)
		{
			cantidadVarones++;
		}

	}
	promedio=suma/100;
	alert("El promedio es: "+promedio)
	alert("El menor es: "+minimo)
	alert("La cantidad de varones mayores de 20 o mas es: "+cantidadVarones)




/*	
	var edad;
	var sexo;
	var contador=0;
	var acumulador=0;
	var promedioEdad;
	var edadMasBaja;
	var cantidadVaronesMayores20;
	var contadorVarones=0;
	var flag=0;

	while(contador<3)
	{
		edad=parseInt(prompt("Ingrese la edad de la persona #"+contador));
		acumulador=acumulador+edad;
		while(edad<0 || edad>100)
		{
			edad=parseInt(prompt("Error. Reingrese la edad"));
			acumulador=acumulador+edad;
		}
		if(edad<edadMasBaja || flag==0)
		{
			edadMasBaja=edad;
			flag=1
		}
		
		sexo=prompt("Ingrese el sexo");
		while(sexo!= "f" && sexo!= "m")
		{
			sexo=prompt("Error. Reingrese el sexo");
		}


		contador++;
	}

	promedioEdad=acumulador/contador;
	alert("El promedio de edad es: "+promedioEdad+". La edad mas baja es: " +edadMasBaja);
*/
}
