/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var sueldoConAumento;
	var resultado;
	
	sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);
	sueldoConAumento=document.getElementById('resultado').value;
	sueldoConAumento=parseInt(sueldoConAumento);
	sueldoConAumento=sueldo/100*110;

	alert("Resultado: "+ sueldoConAumento);
}
