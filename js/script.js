function validateForm() {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const message = document.getElementById('message');

  if (!validateField(name, /^[a-zA-Z]{2,50}$/)) {
    return;
  }

  if (!validateField(email, /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
    return;
  }

  if (!validateField(phone, /^[0-9]{10}$/)) {
    return;
  }
	
  if (!validateField(message, /.{2,100}/)) {
    return;
  }


  alert('¡Formulario enviado con éxito!');
}

function validateField(field, regex) {
  if (!regex.test(field.value)) {
    field.classList.add('is-invalid');
    return false;
  } else {
    field.classList.remove('is-invalid');
    return true;
  }
}
