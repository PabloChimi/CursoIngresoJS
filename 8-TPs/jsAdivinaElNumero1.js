/*Al comenzar el juego generamos un número
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número
  ingresado es el mismo que el número secreto se dará
  por terminado el juego con un mensaje similar a este:
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto;
var contadorIntentos;
//numero, intentos
function comenzar()
{

	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor((Math.random() * 100) + 1);
	contadorIntentos = 0;
	console.log(numeroSecreto);
	document.getElementById("numero").value = "";
	document.getElementById("intentos").value = "";

	}

		//alert(numeroSecreto );




function verificar()
{
	var numeroIngresado;
	contadorIntentos++;
	document.getElementById("intentos").value = contadorIntentos;
	numeroIngresado = parseInt(document.getElementById("numero").value);
  if(numeroIngresado==numeroSecreto)
			 {
				 alert("usted es un ganador y solo en " + contadorIntentos + "intentos!");
			 }
			 else {
			 	if(numeroIngresado>numeroSecreto)
				{
					alert("Te pasaste!");
				}
				else {
					{
						alert("Falta..");
					}

			 }

		 }



}
