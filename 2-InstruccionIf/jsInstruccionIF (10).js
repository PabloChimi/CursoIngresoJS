function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10
	var myRandom;
	myRandom = Math.floor((Math.random() * 10) + 1);
  if(myRandom>=9){alert("excelente");}
	else {
		if(myRandom>=4){alert("aprobo");}
		else {
			alert("Vamos, la proxima se puede");
		}
	}
}//FIN DE LA FUNCIÓN
