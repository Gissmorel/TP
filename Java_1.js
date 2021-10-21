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
      alert('El campo nombre no puede estar vacío');
      return false
    }
    return true;
  }


  
  function valida_telefono() {
  var elemento = document.getElementById('tel');
    if (isNaN(elemento.value)){
      alert('El campo teléfono debe ser un número');
      return false
    }
    return true;
  }
  
  function valida_mail() {
    var elemento = document.getElementById('mail');
    if (/^([a-zA-Z0-9\._])+@([a-a-zA-9])+.([a-z]+)(.[a-z]+)?$/.test(elemento.value))
        return true
    else if
      alert("Escriba un mail válido")
      return false
    }
  }

/*     var regx = /^([a-zA-Z0-9\._])+@([a-a-zA-9])+.([a-z]+)(.[a-z]+)?$/
      if(regx.text(mail))  {
        alert ("su correo es correcto")
        return true;
     }
      else {
        alert ("su correo es incorreco")
        return false;
      } */


  
  function valida_check() {
  var elemento = document.getElementById('mayor');
  if (!elemento.checked){
    alert('Debe ser mayor de edad');
    return false;
  }
  return true;
  }
  
  function validate(e){
    if(valida_nombre() && valida_telefono() && valida_check() && confirm('Desea enviar?')){
      return true;
    } else {
      // evito que se envíe el formulario
      // traba el evento que por defecto se disparó con el botón enviar.
      e.preventDefault();
      return false;
    }
  }