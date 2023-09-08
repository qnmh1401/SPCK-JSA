var submitButton = document.getElementById('btn')
submitButton.addEventListener('click', handleClick)

const email = document.getElementById('inputemail')
const passWord = document.getElementById('inputpass')
let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

var showPass = document.getElementById("checkbox");
var labelShow = document.getElementById("onpass");
labelShow.innerText = "Show password";
passWord.type = "password";
showPass.addEventListener("click", showPassWord);



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

    if(email.value == ""){
        invalidEmail.innerText = "Email is empty"
    }else if(!filter.test(email.value)){
        invalidEmail.innerText = "Wrong email"
    }else{
        invalidEmail.innerText =""
    }

    if(passWord.value == ""){
        invalidPass.innerText = "Password is empty"
    }else if((passWord.value).length < 6 ){
        invalidPass.innerText = "Passwords must be at least 6 characters"
    }else{
        invalidPass.innerText =""
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
   console.log(formData)
function signIn(e) {
    let email = document.getElementById("email").value,
      pwd = document.getElementById("pwd").value;
    var formData = JSON.parse(localStorage.getItem("formData")) || [];
    let exist =
      formData.length &&
      JSON.parse(localStorage.getItem("formData")).some(
        (data) =>
          data.email.toLowerCase() == email.toLowerCase() && data.pwd == pwd
      );
    if (!exist) {
      alert("Incorrect login credentials");
    } else {
      location.href = "../HomePage.html";
    }
    e.preventDefault();
  }