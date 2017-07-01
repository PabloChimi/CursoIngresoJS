/*
	Debemos lograr tomar un dato por 'PROMPT'
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var datoRecibido;
	datoRecibido = prompt("Escribir algo");
	document.getElementById("elNombre").value = datoRecibido;
}
