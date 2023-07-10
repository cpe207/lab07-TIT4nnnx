const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const submitBtn = document.querySelector("#submit-btn");


//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-invalid");
  firstNameInput.classList.remove("is-valid");
}
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-invalid");
  lastNameInput.classList.remove("is-valid");
}
emailInput.onkeyup = () => {
  emailInput.classList.remove("is-invalid");
  emailInput.classList.remove("is-valid");
}
passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-invalid");
  passwordInput.classList.remove("is-valid");
}

submitBtn.onclick = () => {
  let isFirstNameOk = false ;
  let isLastNameOk = false ;
  let isEmailOk = false ;
  let isPasswordOk = false ;

  //Check firstname 
  if(firstNameInput.value === ""){
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true ;
  }

  //Check lastname 
  if(lastNameInput.value === ""){
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true ;
  }

  //Check Email
  if(emailInput.value === "" || validateEmail(emailInput.value)== false){
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.add("is-valid");
    isEmailOk = true ;
  }

  //Check Password
  if(passwordInput.value === "" || passwordInput.value.length < 6){
    passwordInput.classList.add("is-invalid");
  } else {
    passwordInput.classList.add("is-valid");
    isPasswordOk = true ;
  }

  if(isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk){
    alert ("Registered successfully");
  }
};


