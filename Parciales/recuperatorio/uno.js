
function Mostrar()
{
	var base;
	var superficie;

	base=parseInt(document.getElementById('laBase').value);
	superficie=base*base; //Math.pow(base,2);

	alert("La superficie del cuadrado es "+ superficie);

}
