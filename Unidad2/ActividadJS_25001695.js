 var mes = parseInt(prompt("Ingresa tu mes de nacimiento (1-12):"));
 var dia = parseInt(prompt("Ingresa tu día de nacimiento (1-31):"));



if (mes == 1){
      if(dia >= 32){
        alert("Fecha no válida");        
        }else if(dia <= 19){
        alert("Capricornio");   
      }else{
        alert("Acuario");
       }
}else if(mes == 2){
  if(dia >= 30){
        alert("Fecha no válida");
  }else if (dia <= 18){
        alert("Acuario");   
      }else {
        alert("Piscis");
       }
}else if(mes == 3){
  if(dia >= 32){
        alert("Fecha no válida");
  }else if (dia <= 20){
        alert("Piscis");   
      }else {
        alert("Aries");
       }
}else if(mes == 4){
  if(dia >= 31){
        alert("Fecha no válida");
  }else if (dia <= 19){
        alert("Aries");   
      }else {
        alert("Tauro");
       }
}else if(mes == 5){
  if(dia >= 32){
        alert("Fecha no válida");
  }else if (dia <= 20){
        alert("Tauro");   
      }else{
        alert("Géminis");
       }
}else if(mes == 6){
  if(dia >= 31){
        alert("Fecha no válida");
  }else if (dia <= 20){
        alert("Géminis");   
      }else {
        alert("Cáncer");
       }
}else if(mes == 7){
  if(dia >= 32){
        alert("Fecha no válida");
  }else if (dia <= 22){
        alert("Cáncer");   
      }else {
        alert("Leo");
       }
}else if(mes == 8){
  if(dia >= 32){
        alert("Fecha no válida");
  }else if (dia <= 22){
        alert("Leo");   
      }else {
        alert("Virgo");
       }
}else if(mes == 9){
  if(dia >= 31){
        alert("Fecha no válida");
  }else if  (dia <= 22){
        alert("Virgo");   
      }else {
        alert("Libra");
       }
}else if(mes == 10){
  if(dia >= 32){
        alert("Fecha no válida");
  }else if (dia <= 22){
        alert("Libra");   
      }else {
        alert("Escorpio");
       }
}else if(mes == 11){
  if(dia >= 31){
        alert("Fecha no válida");
  }else if (dia <= 21){
        alert("Escorpio");   
      }else {
        alert("Sagitario");
       }
}else if(mes == 12){
  if(dia >= 32){
        alert("Fecha no válida");
  }else if(dia <= 18){
        alert("Sagitario");   
      }else {
        alert("Capricornio");
       }
}else{
        alert("Fecha no válida");        
}

