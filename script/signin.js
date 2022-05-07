let continueBtn = document.getElementById("signupbutton");
    let usersignupDetails =JSON.parse(localStorage.getItem("signupDetails")) || [];
    continueBtn.addEventListener("click", mysignUp)

    function mysignUp(){
      event.preventDefault();


      let firstname = document.getElementById("firstname").value;
      let lastname = document.getElementById("lastname").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      let isFormValid = true;

      let userDetails = {
          firstname:firstname,
        lastname: lastname,
        email: email,
        password: password,
      }
            //console.log(userDetails)
            usersignupDetails.push(userDetails)
            console.log(usersignupDetails)

        localStorage.setItem("signupDetails",JSON.stringify(usersignupDetails))
        alert('User Registerd Succesfully!!!')
              window.location.href = "index.html";
        }

  // signin

  document.querySelector("#submit").addEventListener('click', myLoginFun )
     var registerData = JSON.parse(localStorage.getItem("signupDetails")) ;
    // console.log(registerdData)
     function myLoginFun(r){
     event.preventDefault();
     var enteredEmail = document.querySelector('#email1').value
     var enteredPass = document.querySelector("#pass").value
    // var flag = false
     for( var i =0;i < registerData.length ;i++){
    console.log(registerData[i]);
     if(registerData[i].email == enteredEmail &&
        registerData[i].password ==  enteredPass){
         
      alert('Login Success')
              window.location.href = "index.html";
              break;

   } else{
     console.log("login failed")
     alert('Email does not match \nSignup for this Email')
   }
}

}
// window.location.href="homepage.html"
