var submitButton = document.getElementById('btn')
submitButton.addEventListener('click', handleClick)

const email = document.getElementById('inputemail')
const passWord = document.getElementById('inputpass')
let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

var showPass = document.getElementById("checkbox");
var labelShow = document.getElementById("onpass");
labelShow.innerText = "Show password";
passWord.type = "password";

checkbox.addEventListener("change", function () {
    if (this.checked) {
      passWord.type = "text";
      labelShow.innerText = "Hide password";
    } else {
      passWord.type = "password";
      labelShow.innerText = "Show password";
    }
  });
  

function handleClick (e){
    var invalidEmail = document.getElementById('invalidemail')
    var invalidPass = document.getElementById('invalidpass')

    if (email.value == "" || email == null) {
      invalidEmail.innerText = "Email is empty";
    } else if (!filter.test(email.value)) {
      invalidEmail.innerText = "Wrong email";
    } else {
      invalidEmail.innerText = "";
    }
  
    if (passWord.value == "" || passWord == null) {
      invalidPass.innerText = "Password is empty";
    } else if (passWord.value.length < 6) {
      invalidPass.innerText = "Passwords must be at least 6 characters";
    } else {
      invalidPass.innerText = "";
    }

    if (
      (email.value != "" && email != null) &&
      filter.test(email.value) &&
      (passWord.value != "" &&
      passWord.value.length >= 6 &&
      passWord != null)
    ) {
      window.location = "../signin/index.html";
    } else {
      e.preventDefault();
    }

    // for (let account of formData) {
      
    //     if ((account.email).toLowerCase !== email.value) {
    //       invalidEmail.innerText = "Email doesn't exist";
    //     }
    //     if (account.pwd !== passWord.value) {
    //         invalidPass.innerText = "Wrong password";
    //       }
    //     if (account.email === email.value && account.pwd === passWord.value) {
    //         window.location = "../HomePage.html";
    // }
    // }
}

function signIn(e) {
  let email = document.getElementById("inputemail").value,
    pwd = document.getElementById("inputpass").value;

  let formData = JSON.parse(localStorage.getItem("formData")) || [];

  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) => data.email.toLowerCase() == email.toLowerCase()
    );

  if (!exist) {
    alert("Account Has Incorrect credentials");
    e.preventDefault();
  } else {
    location.replace="https://www.w3schools.com/jsref/met_loc_replace.asp"
  }
}

console.log(localStorage.getItem("formData"));

  document.querySelector("form").addEventListener("submit", handleClick, signIn);
