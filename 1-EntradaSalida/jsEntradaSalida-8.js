/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var resultado;
	var resto;

/*
dividendo: es el número que se va a dividir.
divisor: es el número por el cual se divide.
*/

	dividendo=document.getElementById('numeroDividendo').value;
	dividendo=parseInt(dividendo);
	divisor=document.getElementById('numeroDivisor').value;
	divisor=parseInt(divisor);
	resultado=divisor/dividendo;
	resto=dividendo%divisor;

	alert("El resto es: "+ resto);
}
