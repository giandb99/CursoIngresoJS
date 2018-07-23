function mostrar()
{
	var precio;
	var porcentajeDeDescuento;
	var descuentoEnEfectivo;
	var precioFinal;

	precio=parseInt(prompt("Ingrese el precio"));
	porcentajeDeDescuento=parseInt(prompt("Ingrese el descuento"));
	descuentoEnEfectivo=(precio*porcentajeDeDescuento)/100;
	precioFinal=precio-descuentoEnEfectivo;

	document.getElementById('elPrecioFinal').value=precioFinal;
}

/* 	precio 850
	porcentajededescuento 20
	descuentoEnEfectivo (850*20)/100=170
	precio final 850-170=680  */




