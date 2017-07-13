/*Debemos mostrar dos números Random  del 1 al 10
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var numRandom1, numRandom2, numRandomParaProbabilidad, operacion;

function comenzar()
{
	numRandom1 = Math.floor((Math.random() * 10) + 1);
	numRandom2 = Math.floor((Math.random() * 10) + 1)
  numRandomParaProbabilidad = Math.random();
	if(numRandomParaProbabilidad<0.25)
	{
		operacion = "suma";
	}
	else if(numRandomParaProbabilidad<0.5)
	{
		operacion = "resta";
	}
	else if(numRandomParaProbabilidad<0.75)
	{
		operacion = "multiplicacion";
	}
	else
	{
		operacion = "division"
	}

	switch(operacion)
	{
		case "suma":
		{
		  respuesta = numRandom1 + numRandom2;
		  break;
		}
		case "resta":
		{
			respuesta = numRandom1 - numRandom2;
		  break;
	  }
		case "multiplicacion":
		{
			respuesta = numRandom1 * numRandom2;
			break;
		}
		case "division":
		{
			respuesta = numRandom1 / numRandom2;
			break;
		}
	}

	document.getElementById("PrimerNumero").value = numRandom1;
	document.getElementById("Operador").value = operacion;
	document.getElementById("SegundoNumero").value = numRandom2;
	//document.getElementById("Respuesta").value = "";
}//FIN DE LA FUNCIÓN
function Responder()
{
	if(document.getElementById("Respuesta").value==respuesta)
	{
		alert("Felicidades, ganaste!")
	}
	else {
		     alert("Mal la cuenta :(")
	     }

}//FIN DE LA FUNCIÓN
