function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	while(respuesta == "si")
	{
		contador ++;
		acumulador = acumulador + parseInt(prompt("Ingrese número:"));
    respuesta=prompt("Desea seguir ingresando numeros?")
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
