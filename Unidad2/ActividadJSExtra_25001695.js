    var jugarDeNuevo = true;
    var numeroComputadora;
    var numeroUsuario;
    var eleccion;
    var resultado = "";
    var respuesta;
    
    while (jugarDeNuevo) {
       numeroComputadora = Math.floor(Math.random() * 9) + 1;
        
      
        do {
            numeroUsuario = parseInt(prompt("Ingrese un número entre 1 y 9:"));
          
        } while (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 9);
              
        eleccion = prompt("¿Tu número es mayor, menor o igual al de la computadora? (Escribe 'mayor', 'menor' o 'igual')");
					         
     
       
        if (numeroUsuario > numeroComputadora) {
            resultado = "mayor";
        } else if (numeroUsuario < numeroComputadora) {
            resultado = "menor";
        } else {
            resultado = "igual";
        }

        if (eleccion.toLowerCase() === resultado) {
            alert(`La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. Su elección es ${eleccion}. ¡Ha adivinado!`);
        } else {
            alert(`La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. Su elección es ${eleccion}. ¡No adivinó!`);
        }

     
        respuesta = prompt("¿Quieres jugar otra vez? (SI/NO)").toLowerCase();
        if (respuesta !== "si") {
		alert("Gracias por jugar Cesar Tu numero de carnet es 25001695")
            jugarDeNuevo = false;
                  }
    }
