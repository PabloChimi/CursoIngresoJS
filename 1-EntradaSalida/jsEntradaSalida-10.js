/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var numeroRecibido, resultado;
	numeroRecibido = document.getElementById("importe").value;
	resultado = parseInt(numeroRecibido) * 0.25;
	resultado = parseInt(numeroRecibido) - resultado;
	document.getElementById("resultado").value = resultado;
}
