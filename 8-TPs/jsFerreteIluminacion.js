/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.

 */
function CalcularPrecio ()
{
  var cantidadLamparas, marca, total, totalConDescuento, precioLamparas, impuesto;
  precioLamparas = 35;
  cantidadLamparas = parseInt(document.getElementById("Cantidad").value);
  marca = document.getElementById("Marca").value;
  switch(cantidadLamparas)
  {
    case 1:
    case 2:
    {
      totalConDescuento = precioLamparas * cantidadLamparas;
      break;
    }
    case 3:
    {
      if(marca=="ArgentinaLuz")
      {
        total = precioLamparas * cantidadLamparas;
        totalConDescuento = total - total*0.15;
      }
      else if(marca=="FelipeLamparas")
      {
        total = precioLamparas*cantidadLamparas;
        totalConDescuento = total - total*0.10;
      }
      else
      {
         total = precioLamparas*cantidadLamparas;
         totalConDescuento = total - total*0.05;
      }
      break;
    }
    case 4:
    {
      if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
      {
        total = precioLamparas * cantidadLamparas;
        totalConDescuento = total - total*0.25;
      }
      else
      {
         total = precioLamparas*cantidadLamparas;
         totalConDescuento = total - total*0.20;
      }
      break;
    }
    case 5:
    {
      if(marca=="ArgentinaLuz")
      {
        total = precioLamparas * cantidadLamparas;
        totalConDescuento = total - total*0.40;
      }
      else
      {
         total = precioLamparas*cantidadLamparas;
         totalConDescuento = total - total*0.30;
      }
      break;
    }
    default:
    {
      total = precioLamparas*cantidadLamparas;
      totalConDescuento = total - total*0.5;
    }

  }

if(totalConDescuento>=120)
{
  impuesto = totalConDescuento*0.10;
  totalConDescuento = totalConDescuento + impuesto;
  document.getElementById("precioDescuento").value = totalConDescuento;
  alert("Usted pagó " + impuesto + " de IIBB");
}
else
{
  document.getElementById("precioDescuento").value = totalConDescuento;
}


}
