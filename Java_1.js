
window.onload = iniciar;

function iniciar() {
    document.getElementById('send').addEventListener('click', validate, false);
  }
  
  function valida_nombre() {
    var elemento = document.getElementById('nombre');
    if (elemento.value ==''){
      alert('El campo nombre no puede estar vacío');
      return false
    }
    return true;
  }
  function valida_apellido() {
    var elemento = document.getElementById('apellido');
    if (elemento.value ==''){
      alert('El campo apellido no puede estar vacío');
      return false
    }
    return true;
  }
  function valida_telefono() {
    var elemento = document.getElementById('tel');
    if (!elemento.checkValidity()) {  //comprueba si la validación HTML es correcta
    if(elemento.validity.valueMissing){
        error2(elemento, 'Debe introducir un número de teléfono');
      }
      if(elemento.validity.patternMismatch){
        alert('El campo telefono debe tener 11 cifras');
        error2(elemento, 'Debe tener 11 cifras');
      }
      //error(elemento);    
      return false;
    }
    return true;
  }

  
  function valida_check() {
  var elemento = document.getElementById('mayor');
  if (!elemento.checked){
    alert('Debe ser mayor de edad');
    return false;
  }
  return true;
  }

  function pruebaemail (valor){
    var re= /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    if(!re.exec(valor)){
      alert('email no valido');
      return false;
    }
    else true;
    }
  
  function validate(e){
    if(valida_nombre() && valida_apellido() && valida_telefono() && valida_pruebaemail() && valida_check() && confirm('Desea enviar?')){
      return true;
    } else {
      // evito que se envíe el formulario
      // traba el evento que por defecto se disparó con el botón enviar.
      e.preventDefault();
      return false;
    }
  }

/* Pop-up
   function window_open(url){
    window.open( "../TP/Untitled-1.html", "nombrePop-Up", "width=380,height=500, top=85,left=50");
   }
   document.getElementById("botonWindowOpen").onclick = function() {window_open()}; */




    
