function Mostrar()
{
  var edadRecibida;
  edadRecibida = parseInt(document.getElementById("edad").value);
  if(edadRecibida >= 18){alert("Es mayor de edad");
}else{
  if(edadRecibida >= 13){alert("Es adolescente")
    }else{
     alert("Es un niño");
  }
 }
}
