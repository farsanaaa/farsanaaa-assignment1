 // showing the stregth of the password while typing
 function checkPassStrength() {

  var passweak=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*#?&]{8,}$/;
  var passmedium=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  var passstrong=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{12,}$/;
  var passstrength='invalid'; 
  var pswd = document.forms["myForm"]["psw"].value;
  console.log(pswd);
  if(passweak.test(pswd))
  {      
       passstrength='weak' ;
       if(passmedium.test(pswd))
       { 
          passstrength='medium';
          if(passstrong.test(pswd))
          { 
            passstrength='strong';
          }
       }
  }
  
  if(passstrength == 'weak')
  {
    document.getElementById("pass-strength").setAttribute("class", "weakPass pass-strength ");
    document.getElementById('pass-strength').innerHTML = 'weak';
  }
  else if(passstrength == 'medium')
  {
    document.getElementById("pass-strength").setAttribute("class", "mediumPass pass-strength ");
    document.getElementById('pass-strength').innerHTML = 'medium';
  }  
  else if(passstrength == 'strong')
  {
    document.getElementById("pass-strength").setAttribute("class", "strongPass pass-strength ");
    document.getElementById('pass-strength').innerHTML = 'strong';
  }
  else
  {
    document.getElementById("pass-strength").setAttribute("class", "invalidPass pass-strength ");
    document.getElementById('pass-strength').innerHTML = 'invalid';
  }
}
function hidePassStrength(){
  document.getElementById("pass-strength").setAttribute("class", "pass-strength-hidden");
}


function validateForm() {
  
  var flag=false;
  //checking null or not
  var name = document.forms["myForm"]["name"].value;
  if (name == "") {
    alert("Name must be filled out");
    document.myForm.name.focus();
    return false;
  }
  var email = document.forms["myForm"]["email"].value;
  if (email == "") {
    alert("Email must be filled out");
    document.myForm.email.focus();
    return false;
  }
  var phone = document.forms["myForm"]["phone"].value;
  
  if (phone == "") {
    alert("Phone must be filled out");
    document.myForm.phone.focus();
    return false;
  }
  var psw = document.forms["myForm"]["psw"].value;
  if (psw == "") {
    alert("Password must be filled out");
    document.myForm.psw.focus();
    return false;
  }
  var pswrepeat = document.forms["myForm"]["psw-repeat"].value;
  if (pswrepeat == "") {
    alert("Confirm password must be filled out");
    document.myForm.psw-repeat.focus();
    return false;
  }
  
 
  //validating email
  if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.(?:\.[a-zA-Z0-9-])/.test(email)))
  {
    alert("You have entered an invalid email address!");
    document.myForm.email.focus();
    return false;
  }



  //validating phone 
  var numeric = phone.replace(/\D/g,'');
  var len = numeric.length;
  console.log(numeric,len,phone);
  var pat1 = /^([0-9]{3}-[0-9]{3}-[0-9]{4})$/; //checking the number is in xxx-xxx-xxxx
  var pat2 = /^([0-9]{3}\s[0-9]{3}\s[0-9]{4})$/; //checking the number is in xxx xxx xxxx
  var pat3 = /^([0-9]{3}.[0-9]{3}.[0-9]{4})$/; //checking the number is in xxx.xxx.xxxx
  var pat4 =/^([0-9]{10})$/;  //checking the number is in xxxxxxxxxx

  if((pat1.test(phone)) || (pat2.test(phone)) || (pat3.test(phone))|| (pat4.test(phone)))
  { 
    if(len != 10)
      {
        alert('Please enter a valid phone number');
        document.myForm.phone.focus();
        return false;
        
      } 
  }
  else
  {
      alert('Please enter a valid phone number');
      document.myForm.phone.focus();
      return false;
  } 
  // validating passwords
  
  //password matching
  if(psw != pswrepeat)
      {
        alert("Password mismatch");
        return false;
      }
      else{
       /*var passweak=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        var passmedium=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        var passstrong=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/;
        var passstrength='invalid';
        */
        if(!(passweak.test(psw)))
        {

          alert("Password Must contain atleast one uppercase letter, lowercase letter  and one digit and must be 8 char long ")
          return false;
        }

      }
    }
  