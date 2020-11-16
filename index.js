function validateForm() {
  
    var flag=false;
    //checking null or not
   
    var email = document.forms["myForm"]["email"].value;
    if (email == "") {
      alert("Email must be filled out");
      document.myForm.email.focus();
      return false;
    }
    
   
    var psw = document.forms["myForm"]["psw"].value;
    if (psw == "") {
      alert("Password must be filled out");
      document.myForm.psw.focus();
      return false;
    }
   
    
   
    //validating email
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.(?:\.[a-zA-Z0-9-])/.test(email)))
    {
      alert("You have entered an invalid email address!");
      document.myForm.email.focus();
      return false;
    }
    if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$/)
    {
        alert("You have entered an invalid password");
        document.myForm.pwd.focus();
        return false;
    }
  
    //     if(email.value =="" || pwd.value==""){
    //         alert("Fields cannot be empty");
    //         return false;
    //     }
    //     else{
    //         return true;
    //     }
    // }
    // if(email.value==""){
    //     alert("Email cannot be empty");
    //     return false;
    // }
    // else if(pwd.value==""){
    //     alert("Password cannot be empty");
    //     return false;
    // }
    // else{
    //     return true;
    // 
}
