var submitButton = document.getElementById('btn')
submitButton.addEventListener('click', handleClick)

var yourName = document.getElementById('inputinfor')
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
  
  function handleClick(e) {
    var invalidName = document.getElementById("invalidname");
    var invalidEmail = document.getElementById("invalidemail");
    var invalidPass = document.getElementById("invalidpass");
    if (yourName.value == "" || yourName == null) {
        invalidName.innerText = "Name is empty";
      } else {
        invalidName.innerText = "";
      }
    
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
        (yourName.value != "" && yourName != null) &&
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
    
      //   const accounts = [
      //     {
      //       name: email.value,
      //       pass: passWord.value,
      //     },
      //   ];
    
      //   localStorage.setItem("accounts", JSON.stringify(accounts));
    }

    console.log(localStorage.getItem("formData"));

    
    document.querySelector("form").addEventListener("submit", handleClick, signUp);
    
    function signUp(e) {
      let name = document.getElementById("inputinfor").value,
        email = document.getElementById("inputemail").value,
        pwd = document.getElementById("inputpass").value;
    
      let formData = JSON.parse(localStorage.getItem("formData")) || [];
    
      let exist =
        formData.length &&
        JSON.parse(localStorage.getItem("formData")).some(
          (data) => data.email.toLowerCase() == email.toLowerCase()
        );
    
      if (!exist) {
        formData.push({ name, email, pwd });
        localStorage.setItem("formData", JSON.stringify(formData));
        document.querySelector("form").reset();
        alert("Account Created Successfully");
        window.location.replace = "../HomePage.html"
      } else {
        alert("Ooopppssss... Duplicate found!!!\nYou have already signed up");
      }
      e.preventDefault();
    }
    
    console.log(localStorage.getItem("formData"));
