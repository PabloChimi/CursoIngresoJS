function Mostrar()
{

	var contador=0;
	var maximo, minimo, datoRecibido;
	// declarar variables

	var respuesta='si';

	while(respuesta!='no')
	{
		datoRecibido= prompt("ingrese un numero");
		if(contador==0)
		{
			maximo= datoRecibido;
			minimo= datoRecibido;
		}
		else if(datoRecibido>=maximo)
		{
			maximo = datoRecibido;
		}
		else if(datoRecibido<=minimo)
		{
			minimo = datoRecibido;
		}
		contador++;
	  respuesta = prompt("Desea seguir?");
	}

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN
