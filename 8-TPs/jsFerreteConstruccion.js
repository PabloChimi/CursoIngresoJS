/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo ()
{
	var largo, ancho, respuesta;
	largo = parseInt(document.getElementById("Largo").value);
	ancho = parseInt(document.getElementById("Ancho").value);
	respuesta = (largo + ancho)*2*3;
	alert("Deberá comprar " + respuesta + " metros de alambre.")
}

function Circulo ()
{
	var radio, respuesta;
	radio = parseInt(document.getElementById("Radio").value);
	respuesta = (radio*2*3.14);
	alert("Deberá comprar " + respuesta + " metros de alambre.");
}

function Materiales ()
{
	var largo, ancho, area, bolsaCemento, bolsaCal;
	largo = parseInt(document.getElementById("Largo").value);
	ancho = parseInt(document.getElementById("Ancho").value);
	area = largo*ancho;
	bolsaCemento = area*2;
	bolsaCal = area*3;
	alert("Se necesitan " + bolsaCemento + " bolsas de cemento y " + bolsaCal + " bolsas de cal.")
}
