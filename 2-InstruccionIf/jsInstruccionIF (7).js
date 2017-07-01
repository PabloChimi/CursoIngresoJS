function Mostrar()
{
	var edadRecibida, estadoCivilRecibido;
  edadRecibida = parseInt(document.getElementById("edad").value);
	estadoCivilRecibido = document.getElementById("estadoCivil").value;
  if(edadRecibida < 18 && estadoCivilRecibido!="soltero"){
		alert("Es muy pequeño para no ser soltero!");
	}
//tomo la edad




}//FIN DE LA FUNCIÓN
