function Mostrar()
{
	var edadRecibida, estadoCivilRecibido;
  edadRecibida = parseInt(document.getElementById("edad").value);
	estadoCivilRecibido = document.getElementById("estadoCivil").value;
  if(edadRecibida >= 18 && estadoCivilRecibido=="Soltero"){
		alert("Es soltero y no es menor");
	}
//tomo la edad
}//FIN DE LA FUNCIÓN
