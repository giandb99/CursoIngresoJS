function Mostrar()
{
 	var importe;
 	var descuento;
 	var importeFinal;

 	importe=parseInt(prompt("Ingrese el importe"));
 
 	//descuento=importe*25/100
 	// importeFinal=importe-(importe*0.25);

	descuento=25;
	importeFinal=importe-(importe*0.25);

 	document.getElementById('importeFinal').value=importeFinal;
}
