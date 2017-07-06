function Mostrar()
{
//tomo la edad
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{
	case "Febrero":
	            alert("Este mes no tiene mas de 29 días");
							break;
	default:
	            alert("Este mes tiene 30 dias o más");
}

//alert (mesDelAño);




}//FIN DE LA FUNCIÓN
