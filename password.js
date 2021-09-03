var password = document.getElementById("create")
  , confirm_password = document.getElementById("confirm");



function validatePassword() {
  if(password.value != confirm_password.value) {

    confirm_password.setCustomValidity("The passwords don’t match! Try again");
  }

  else {
    confirm_password.setCustomValidity('');
  }

}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
