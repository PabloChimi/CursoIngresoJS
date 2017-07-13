function Mostrar()
{

	var contador=0;
	//declarar contadores y variables
	var sumaPositivos = 0;
	var sumaNegativos = 0;
	var cantPositivos = 0;
	var cantNegativos = 0;
	var cantCeros = 0;
	var cantPares = 0;
	var promPositivos = 0;
	var promNegativos = 0;
	var diferencia = 0;

	var respuesta="si";

	while(respuesta!="no")
	{
		contador ++;
		datoRecibido= parseInt(prompt("Ingrese número:"));
		if(datoRecibido==0)
		{
			cantCeros++;
		}
		else if(datoRecibido>0)
		{
			sumaPositivos = sumaPositivos + datoRecibido;
			cantPositivos++;
			promPositivos = sumaPositivos/cantPositivos;

		}
		else {
			sumaNegativos = sumaNegativos + datoRecibido;
			cantNegativos++;
			promNegativos = -(sumaNegativos/cantNegativos);

		}
		if(datoRecibido%2 == 0 && datoRecibido!=0)
		{
			cantPares++;
		}

		respuesta=prompt("Desea seguir ingresando numeros?");
	}
	diferencia = cantPositivos - cantNegativos;
	diferencia = Math.abs(diferencia);
  document.writeln("La suma de positivos es " + sumaPositivos + "<br/>");
	document.writeln("La suma de negativos es " + sumaNegativos + "<br/>");
	document.writeln("La cantidad de positivos es " + cantPositivos + "<br/>");
	document.writeln("La cantidad de negativos es " + cantNegativos + "<br/>");
	document.writeln("La cantidad de ceros es " + cantCeros + "<br/>");
	document.writeln("La cantidad de números pares es " + cantPares + "<br/>");
	document.writeln("El promedio de los positivos es " + promPositivos + "<br/>");
	document.writeln("El promedio de los negativos es " + promNegativos + "<br/>");
	document.writeln("La diferencia entre negativos y positivos es " + diferencia + "<br/>");

}//FIN DE LA FUNCIÓN
