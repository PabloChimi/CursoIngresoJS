function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;

	var respuesta='si';
  while(respuesta=="si")
	{
		contador ++;
		datoRecibido= parseInt(prompt("Ingrese número:"));
		if(datoRecibido>=0)
		{
			positivo = positivo + datoRecibido;
		}
		else {
			negativo= negativo*datoRecibido;
		}
		respuesta=prompt("Desea seguir ingresando numeros?");

	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
