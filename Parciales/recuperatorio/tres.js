function Mostrar()
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	var promedio;

	precio1=parseInt(document.getElementById('precioUno').value);
	precio2=parseInt(document.getElementById('precioDos').value);
	precio3=parseInt(document.getElementById('precioTres').value);
	suma=precio1+precio2+precio3;
	promedio=suma/3;
	
	alert("La suma de los precios es: "+ suma + " y el promedio de los precios es: "+ promedio);













}
