var submitButton = document.getElementById('btn')
submitButton.addEventListener('click', handleClick)

var yourName = document.getElementById('inputinfor')
const email = document.getElementById('inputemail')
const passWord = document.getElementById('inputpass')
let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


var showPass = document.getElementById('checkbox')
var labelShow = document.getElementById('onpass')
labelShow.innerText = "Show password"
passWord.type = "password"


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
    var invalidName = document.getElementById('invalidname')
    var invalidEmail = document.getElementById('invalidemail')
    var invalidPass = document.getElementById('invalidpass')

    if(yourName.value == ""){
        invalidName.innerText = "Name is empty"
    }else{
        invalidName.innerText =""
    }

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

    if(!yourName.value == ""
        && !email.value == ""
        && filter.test(email.value)
        && !passWord.value == ""
        && passWord.value.length >= 6 ){
        window.location = "../signin/index.html"
    }
    
    // const accounts = [
    //     {
    //         name : email.value,
    //         pass : passWord.value
    //     }
    // ]
    // localStorage.setItem('accounts', JSON.stringify(accounts))
for(let i = 0;
    accounts.length > i;
    i++){
        const accounts = []
        const account = []
        accounts.push(account)
        // const accounts = JSON.parse(localStorage.getItem("accounts")) || []
        // accounts.push(email.value)
        // localStorage.setItem('accounts', JSON.stringify(accounts))
      
            
            account.push( {name : email.value,
                        pass : passWord.value})
        }
    }

    console.log(accounts)
}
