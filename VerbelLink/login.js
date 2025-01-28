const openEmail = document.querySelector('.open-email')
const emailAddress = "anuragtandan101@gmail.com"
const subject = encodeURIComponent("Help Request");
const body = encodeURIComponent("i need help...");

openEmail.addEventListener("click",(e) => {
  e.preventDefault();
  window.location.href = `mailto:${emailAddress}?subject = ${subject}&body = ${body}`;

})

const choisContainer = document.querySelector('.choisContainer')
const overlay = document.querySelector('.overlay')
const openLogin = document.querySelector('#openRegistration')
const stopScrolling = document.body
const registrationChoice = document.querySelector('.registrationChoice')
const translatorRegistration = document.querySelector('.translator-registration')
const registerAsTourist = document.querySelector('#registerAsTourist')
const registerAsTranslatore = document.querySelector('#registerAsTranslatore')
const formContainer = document.querySelector('.form-container')
const closeForm = document.querySelector('#close-registration')

const signupPopup = document.querySelector('#signupPopup')
const openLoginForm = document.querySelector('#openLoginForm')
const loginPopup = document.querySelector('#loginPopup')
const openSignupForm = document.querySelector('#openSignupForm')

const closeLogin = document.querySelector('#closeLogin')

const closeSignup = document.querySelector('#closeSignup')

// ----------Admin Login----------
const AdminloginPopup = document.querySelector('#AdminloginPopup')
const loginAdmin = document.querySelector('#loginAdmin')
const closeAdminLogin = document.querySelector('#closeAdminLogin')

// ****************************************


openLogin.addEventListener("click",(e) => {
  e.preventDefault();
  choisContainer.style.display = "block"
  overlay.style.display = "block"
  // stopScrolling.style.overflowY = "hidden"
})
registrationChoice.addEventListener("click",(e) => {
  choisContainer.style.display = "none"
  overlay.style.display = "none"
  stopScrolling.style.overflowY = "scroll"
})
registerAsTourist.addEventListener("click",(e) => {
  choisContainer.style.display = "none"
  overlay.style.display = "block"
  formContainer.style.display = "block"
})

closeForm.addEventListener("click",(e) => {
  overlay.style.display = "none"
  formContainer.style.display = "none"
})

registerAsTranslatore.addEventListener("click",(e) => {
  signupPopup.style.display = "block"
  choisContainer.style.display = "none"
  overlay.style.display = "block"
  formContainer.style.display = "none"
})

openLoginForm.addEventListener("click",(e) => {
  e.preventDefault();
  signupPopup.style.display = "none"
  loginPopup.style.display = "block"
})

openSignupForm.addEventListener("click",(e) => {
  e.preventDefault();
  signupPopup.style.display = "block"
  loginPopup.style.display = "none"
})

closeLogin.addEventListener("click",(e) => {
  overlay.style.display = "none"
  loginPopup.style.display = "none"
})

closeSignup.addEventListener("click",(e) => {
  overlay.style.display = "none"
  signupPopup.style.display = "none"
})

// *********Admin login*****

loginAdmin.addEventListener("click",(e) => {
  AdminloginPopup.style.display = "block"
  overlay.style.display = "block"
  choisContainer.style.display = "none"
})
closeAdminLogin.addEventListener("click",(e) => {
    AdminloginPopup.style.display = "none"
  overlay.style.display = "none"
})

// ********************************