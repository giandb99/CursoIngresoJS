/*
	ingresar hasta que el usuario quiera:
			nombre de un animal del zoológico
			el peso (entre 1 y 1000)
			la temperatura del hábitat (entre -30 y 30)

	informar al terminar el ingreso por document.write: 
			a) La cantidad de temperaturas pares. --
			b) El nombre y temperatura del animal más pesado --
			c) La cantidad de animales que viven a menos de 0 grados. --
			d) El promedio del peso de todos los animales.	--
			f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
*/

function mostrar()
{
	var animal;
	var peso;
	var temperatura;
	var contador=0;
	var respuesta="si";
	var temperaturasPares=0;
	var pesoMaximo;
	var pesoMinimo;
	var animalPesado;
	var temperaturaAnimalPesado;
	var bandera=0;
	var cantidadAnimalesBajoCero=0;
	var promedio;
	var acumuladorPeso=0;
	
	while(respuesta=="si")
	{
		animal=prompt("Ingrese el nombre del animal");

		peso=parseInt(prompt("Ingrese el peso del animal"));
		while(peso<1 || peso >1000)
		{
			peso=parseInt(prompt("Error. Reingrese el peso del animal"));
		}

		temperatura=parseInt(prompt("Ingrese la temperatura del hábitat"));
		while(temperatura<-30 || temperatura >30)
		{
			temperatura=parseInt(prompt("Error. Reingrese la temperatura del hábitat"));
		}

		if(temperatura%2==0 && temperatura!=0)
		{
			temperaturasPares++;
		}

		if(peso>pesoMaximo || bandera==0)
		{
			pesoMaximo=peso;
			animalPesado=animal;
			temperaturaAnimalPesado=temperatura;
		}

		if(peso<pesoMinimo || bandera == 0)
		{
			pesoMinimo=peso;
			bandera=1;
		}

		if(temperatura<0)
		{
			cantidadAnimalesBajoCero++;
		}

		acumuladorPeso=acumuladorPeso+peso;	
		contador++;
		respuesta=prompt("Desea continuar?");
	}

	promedio=acumuladorPeso/contador;

	document.write("<br> La cantidad de temperaturas pares es: "+temperaturasPares);
	document.write("<br> El nombre del animal mas pesado es: "+animalPesado+ " y su temperatura es: "+temperaturaAnimalPesado);
	document.write("<br> La cantidad de animales que viven a menos de 0 grados es: "+cantidadAnimalesBajoCero);
	document.write("<br> El promedio del peso de todos los animales es: "+promedio);
}