/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var numeroRecibido, resultado;
	numeroRecibido = document.getElementById("sueldo").value;
	resultado = parseInt(numeroRecibido) * 0.1;
	resultado = resultado + parseInt(numeroRecibido);
	document.getElementById("resultado").value = resultado;
}
