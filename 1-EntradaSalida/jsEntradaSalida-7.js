/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar()
{
	var primerNumero, segundoNumero, sumaNumeros;
  primerNumero = document.getElementById("numeroUno").value;
  segundoNumero = document.getElementById("numeroDos").value;
  sumaNumeros = parseInt(primerNumero) + parseInt(segundoNumero);
  alert("La suma es: " + sumaNumeros);
}

function restar()
{
	var primerNumero, segundoNumero, sumaNumeros;
  primerNumero = document.getElementById("numeroUno").value;
  segundoNumero = document.getElementById("numeroDos").value;
  sumaNumeros = parseInt(primerNumero) - parseInt(segundoNumero);
  alert("La suma es: " + sumaNumeros);
}

function multiplicar()
{
	var primerNumero, segundoNumero, sumaNumeros;
  primerNumero = document.getElementById("numeroUno").value;
  segundoNumero = document.getElementById("numeroDos").value;
  sumaNumeros = parseInt(primerNumero) * parseInt(segundoNumero);
  alert("La suma es: " + sumaNumeros);
}

function dividir()
{
	var primerNumero, segundoNumero, sumaNumeros;
  primerNumero = document.getElementById("numeroUno").value;
  segundoNumero = document.getElementById("numeroDos").value;
  sumaNumeros = parseInt(primerNumero) / parseInt(segundoNumero);
  alert("La suma es: " + sumaNumeros);
}
