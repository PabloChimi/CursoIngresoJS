/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
  var primerNumero, segundoNumero, sumaNumeros;
  primerNumero = document.getElementById("numeroUno").value;
  segundoNumero = document.getElementById("numeroDos").value;
  sumaNumeros = parseInt(primerNumero) + parseInt(segundoNumero);
  alert("La suma es: " + sumaNumeros);
}
