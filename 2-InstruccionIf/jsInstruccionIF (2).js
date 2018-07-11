function mostrar()
{
//tomo la edad  
	
	var edad;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

if(edad >= 18)
{
	alert("Usted es mayor de edad");
}

}//FIN DE LA FUNCIÓN

/* 	operadores de comparación:

	==	igual
	!=	distinto
	>=	mayor o igual
	<=	menor o igual
	> 	mayor
	<	menor	*/