function mostrar()
{
	var precio;
	var descuento;
	var descuentoEnDinero;
	var precioConDescuento;
	var iva;
	var precioConDescuentoMasIva;

	precio=prompt("Ingrese el precio");
	descuento=prompt("Ingrese el descuento");
	descuentoEnDinero=(precio*descuento)/100;
	precioConDescuento=precio-descuentoEnDinero;
	iva=0.21;
	precioConDescuentoMasIva=(precioConDescuento*iva)+precioConDescuento;

	alert("El descuento en dinero es "+ descuentoEnDinero+ ", el precio con el descuento es "+precioConDescuento+", y el IVA es 0.21");
	document.getElementById('elPrecioFinal').value=precioConDescuentoMasIva;
}
