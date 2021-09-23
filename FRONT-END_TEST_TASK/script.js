var loginFlag = false;
var passwordFlag = false;
var emailFlag = false;

function loginValidityChecks(){

    var loginInput = document.getElementById('login');

    if(loginInput.value.length < 3){
        loginInput.style.border = "1px solid red";
        alert("At least 3 characters long!");
    }
    else if(loginInput.value.match(/[\!\@\#\$\%\^\&\*\ ]/g)){
        loginInput.style.border = "1px solid red";
        alert("Must only contain letters and numbers (no special characters)!");
    }
    else if(!loginInput.value.match(/[^a-zA-Z0-9]{0,}/g)){
        loginInput.style.border = "1px solid red";
    }
    else {
        loginInput.style.border = "1px solid #32CD32";
        loginFlag = true;
    }
} 


function passwordValidityChecks(){

    var flag = false;
    var passwordInput = document.getElementById('password');

    if (passwordInput.value.length < 8 | passwordInput.value.length > 100) {
        passwordInput.style.border = "1px solid red";
        alert("At least 8 characters long (and less than 100 characters)!");
      } 
    else if (!passwordInput.value.match(/[0-9]/g)){
        passwordInput.style.border = "1px solid red";
        alert("Contains at least 1 number!");
    }
    else if (!passwordInput.value.match(/[a-z]/g)){
        passwordInput.style.border = "1px solid red";
        alert("Contains at least 1 lowercase letter!");
    }
    else if (!passwordInput.value.match(/[A-Z]/g)){
        passwordInput.style.border = "1px solid red";
        alert("Contains at least 1 uppercase letter!");
    }
    else if (!passwordInput.value.match(/[\!\@\#\$\%\^\&\*]/g)){
        passwordInput.style.border = "1px solid red";
        alert("Contains a special character (e.g. @ !)!");
    }
    else {
        passwordInput.style.border = "1px solid #32CD32";
        passwordFlag = true;
    }
    return flag;
}

function passwordRepeatValidityChecks(){

    var passwordRepeatInput = document.getElementById('password_repeat'); 
    var passwordInput = document.getElementById('password');

    if(passwordRepeatInput.value != passwordInput.value){
        passwordRepeatInput.style.border = "1px solid red";
        alert("Passwords don't match!");
    }
    else {
        passwordRepeatInput.style.border = "1px solid #32CD32";
    }
}

function emailValidityChecks(){
    var flag = false;
    var emailInput = document.getElementById('email');
    if(emailInput.value.match(/^[0-9a-z_-]+\@[0-9a-z_-]+\.[a-z]{2,4}$/i)){
        emailInput.style.border = "1px solid #32CD32";
        emailFlag = true;
    }
    else{
        emailInput.style.border = "1px solid red";
    }
}

function changeTheme(num){
    var header = document.querySelector(".header");
    var labelList = header.querySelectorAll("label");

    var r = header.querySelectorAll("input")
    var container = document.querySelector(".container");
    var h = container.querySelectorAll("h1");
     
    var submit = container.querySelectorAll(".submit_button");

    var reg_form = container.querySelector(".registration");
    
    switch(num){
        case 1: {
            document.body.style.background = 'url(imagines/sakura.gif) no-repeat';
            document.body.style.backgroundSize = '100%';
            for(let i = 0; i < labelList.length; i++){
                labelList[i].style.color = "#e0d7f8";
                labelList[i].style.textShadow = "#e0d7f8 0 0 5px";
            }
            h[0].style.backgroundColor = "#e0d7f8";
            submit[0].style.backgroundColor = "#e0d7f8";
            reg_form.style.borderBottom = " 5px solid#e0d7f8";
            reg_form.style.backgroundColor = "#ffffff";
            r[1].style.checked = false;
            r[2].style.checked = false;

            break;
        }
        case 2: { 
            document.body.style.background = 'url(imagines/pink.jpg) no-repeat';
            document.body.style.backgroundSize = '100%';
            for(let i = 0; i < labelList.length; i++){
                labelList[i].style.color = "#ffa2c6";
                labelList[i].style.textShadow = "#efeff3 0 0 5px";
            }
            h[0].style.backgroundColor = "#ffa2c6";
            submit[0].style.backgroundColor = "#ffa2c6";
            reg_form.style.borderBottom = " 5px solid #ffa2c6";
            reg_form.style.backgroundColor = "#ffffff";
            r[0].style.checked = false;
            r[2].style.checked = false;
            break;
        }
        case 3: {
            document.body.style.background = 'url(imagines/moon.jpg) no-repeat';
            document.body.style.backgroundSize = '100%';
            for(let i = 0; i < labelList.length; i++){
                labelList[i].style.color = "#e0d7f8";
                labelList[i].style.textShadow = "#afeeee 0 0 5px";
            }
            h[0].style.backgroundColor = "#342a70ce"
            submit[0].style.backgroundColor = "#342a70ce";
            reg_form.style.borderBottom = " 5px solid #483d8b";
            reg_form.style.backgroundColor = "#e6e6fa";
            r[0].style.checked = false;
            r[1].style.checked = false;
            break;
        }
    }      
}

function sendReq(){

    const data = { username: document.getElementById('login').value,
        password: document.getElementById('password').value,
        email: document.getElementById('email').value};

    if(loginFlag && passwordFlag && emailFlag){
        
        (async () => {
            const rawResponse = await fetch('https://jsonplaceholder.typicode.com/users', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });
            const content = await rawResponse.json();
          
            alert("Data sent successfully.");
          })();
    }

}
