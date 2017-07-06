function Mostrar()
{
//tomo la edad
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño)
{
	case "Febrero":
	{
		alert("Tiene 28 días")
	}
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
	{
		alert("Tiene 30 días");
		break;
	}
	default:
	{
		alert("Tiene 31 días");
	}
}
//alert (mesDelAño);





}//FIN DE LA FUNCIÓN
