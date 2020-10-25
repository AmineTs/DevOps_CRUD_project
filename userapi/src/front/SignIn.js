//const users = require('../src/controllers/user');
//const axios = require('axios');
//onst user = require('../controllers/user');


function createSignUp(username, firstname, lastname, password)
{
  const user = {
    username: username,
    firstname: firstname,
    lastname: lastname,
    password:password
  }
 alert('entrée dans '+username+''+firstname+''+lastname+''+password);
  
  var myHeaders = new Headers();

  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Access-Control-Allow-Origin', '*');
  myHeaders.append('Access-Control-Allow-Credentials', 'true');
  myHeaders.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  myHeaders.append("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token");

  var raw = JSON.stringify({"username":username,"firstname":firstname,"lastname":lastname,"password":password});

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw
  };

  fetch("http://localhost:3000/user", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    alert("zebin o lkelb " +raw);






}














function field_focus(field, username)
  {
    var usernameBlack = document.getElementById("usernameField");
    var passwordBlack = document.getElementById("passwordField");
    if(field.value == username)
    {
      field.value = '';
      usernameBlack.style.color="black";
      usernameBlack.style.borderColor="#ccc";
      usernameBlack.style.borderBottomColor="#ccc";
      passwordBlack.style.color="black";
      passwordBlack.style.borderColor="#ccc";
      passwordBlack.style.borderBottomColor="#ccc";


    }
  }

  function field_blur(field, username)
  {  
    var usernameGrey = document.getElementById("usernameField");
    var passwordGrey = document.getElementById("passwordField");
    if(field.value == '')
    {
      field.value = username;
      usernameGrey.style.color="#AAAAAA";
      passwordGrey.style.color="#AAAAAA";
    }
  }

  function checkFields(username,password)
  {
    var usernameWrong = document.getElementById("usernameField");
    var passwordWrong = document.getElementById("passwordField");
      if (username !='username' && password !='username')
      {
          return window.location.href='Home.html';
      }

      if(username =='username' && password =='username')
      {
          alert("Please fill the username and password fields");
          usernameWrong.style.color="red";
          usernameWrong.style.borderColor="red";
          usernameWrong.style.borderBottomColor="red";
          passwordWrong.style.color="red"
          passwordWrong.style.borderColor="red";
          passwordWrong.style.borderBottomColor="red";;
      }
      else if (username !='username' && password =='username')
      {
          alert("Please fill the password field");
          passwordWrong.style.color="red"
          passwordWrong.style.borderColor="red";
          passwordWrong.style.borderBottomColor="red";;
      }
      else if (username =='username' && password !='username')
      {
          alert("Please fill the username field");
          usernameWrong.style.color="red";
          usernameWrong.style.borderColor="red";
          usernameWrong.style.borderBottomColor="red";
      }


  }












  function field_focusUsernameSignUp(field, username)
  {
    var usernameBlack = document.getElementById("usernameSignUpField");

    if(field.value == username)
    {
      field.value = '';
      usernameBlack.style.color="black";
      usernameBlack.style.borderColor="#ccc";
      usernameBlack.style.borderBottomColor="#ccc";
    }
  }

  function field_focusFirstnameSignUp(field, firstname)
  {
    var firstnameBlack = document.getElementById("FirstnameSignUpField");

    if(field.value == firstname)
    {
      field.value = '';
      firstnameBlack.style.color="black";
      firstnameBlack.style.borderColor="#ccc";
      firstnameBlack.style.borderBottomColor="#ccc";
    }
  }

  function field_focusLastnameSignUp(field, lastname)
  {
    var lastnameBlack = document.getElementById("LastnameSignUpField");

    if(field.value == lastname)
    {
      field.value = '';
      lastnameBlack.style.color="black";
      lastnameBlack.style.borderColor="#ccc";
      lastnameBlack.style.borderBottomColor="#ccc";
    }
  }

  function field_focusPasswordSignUp(field, password)
  {
    var passwordBlack = document.getElementById("passwordSignUpField");

    if(field.value == password)
    {
      field.value = '';
      passwordBlack.style.color="black";
      passwordBlack.style.borderColor="#ccc";
      passwordBlack.style.borderBottomColor="#ccc";
    }
  }

  function field_focusConfPasswordSignUp(field, confpassword)
  {
    var confpasswordBlack = document.getElementById("passwordSignUpConfField");

    if(field.value == firstname)
    {
      field.value = '';
      confpasswordBlack.style.color="black";
      confpasswordBlack.style.borderColor="#ccc";
      confpasswordBlack.style.borderBottomColor="#ccc";
    }
  }

  function field_blurSignUp(field, username)
  {  
    var usernameGrey = document.getElementById("usernameSignUpField");
    var firstnameGrey = document.getElementById("FirstnameSignUpField");
    var lastnameGrey = document.getElementById("LastnameSignUpField");
    var passwordGrey = document.getElementById("passwordSignUpField");
    var confpasswordGrey = document.getElementById("passwordSignUpConfField");
    if(field.value == '')
    {
      field.value = username;
      switch(field.value) {
        case "username":
            usernameGrey.style.color="#AAAAAA";
            passwordGrey.style.color="#AAAAAA";
            confpasswordGrey.style.color="#AAAAAA";

          break;
        case "Firstname":
            firstnameGrey.style.color="#AAAAAA";

          break;
        case "Lastname":
            lastnameGrey.style.color="#AAAAAA";

        break;  

      }
    

    }
  }

  function checkFieldsSignUp(username,firstname,lastname,password,confpassword)
  {
    var usernameWrong = document.getElementById("usernameSignUpField");
    var firstnameWrong = document.getElementById("FirstnameSignUpField");
    var lastnameWrong = document.getElementById("LastnameSignUpField");
    var passwordWrong = document.getElementById("passwordSignUpField");
    var confpasswordWrong = document.getElementById("passwordSignUpConfField");


      if(username =='username' || username =='')
      {
        usernameWrong.style.color="red";
        usernameWrong.style.borderColor="red";
        usernameWrong.style.borderBottomColor="red";
      }
      if (firstname =='Firstname' || firstname =='')
      {
        firstnameWrong.style.color="red";
        firstnameWrong.style.borderColor="red";
        firstnameWrong.style.borderBottomColor="red";;
      }
      if (lastname =='Lastname' || lastname =='')
      {
        lastnameWrong.style.color="red";
        lastnameWrong.style.borderColor="red";
        lastnameWrong.style.borderBottomColor="red";
      }
      if (password =='username' || password =='')
      {
        passwordWrong.style.color="red";
        passwordWrong.style.borderColor="red";
        passwordWrong.style.borderBottomColor="red";
      }
      if (confpassword =='username' || confpassword =='')
      {
        confpasswordWrong.style.color="red";
        confpasswordWrong.style.borderColor="red";
        confpasswordWrong.style.borderBottomColor="red";
      }
      if(password != confpassword)
      {
        passwordWrong.style.color="red";
        passwordWrong.style.borderColor="red";
        passwordWrong.style.borderBottomColor="red";
        confpasswordWrong.style.color="red";
        confpasswordWrong.style.borderColor="red";
        confpasswordWrong.style.borderBottomColor="red";
        alert("Passwords are not the same");
      }
      else if(username =='username' || username =='' || firstname =='Firstname' || firstname =='' || lastname =='Lastname' || lastname =='' || password =='username' || password =='' || confpassword =='username' || confpassword =='')
      {
        alert("Please make sure that you filled all the fields") ;  
      }
     else if (username !='username' && username !='' && firstname !='Firstname' && firstname !='' && lastname !='Lastname' && lastname !='' && password !='username' && password !='' && confpassword !='username' && confpassword !='')
      {
          alert("NEXT PAGE")
          createSignUp(username,firstname,lastname,password);
          //return window.location.href='Home.html';
      }
  }

  function disconnect()
  {
    return window.location.href='Index.html'
  }




















   function field_focusUsernameUpdate(field, username)
  {
    var usernameBlack = document.getElementById("usernameUpdateField");

    if(field.value == username)
    {
      usernameBlack.style.color="black";
      usernameBlack.style.borderColor="#ccc";
      usernameBlack.style.borderBottomColor="#ccc";
    }
  }

  function field_focusFirstnameUpdate(field, firstname)
  {
    var firstnameBlack = document.getElementById("FirstnameUpdateField");

    if(field.value == firstname)
    {
      firstnameBlack.style.color="black";
      firstnameBlack.style.borderColor="#ccc";
      firstnameBlack.style.borderBottomColor="#ccc";
    }
  }

  function field_focusLastnameUpdate(field, lastname)
  {
    var lastnameBlack = document.getElementById("LastnameUpdateField");

    if(field.value == lastname)
    {
      lastnameBlack.style.color="black";
      lastnameBlack.style.borderColor="#ccc";
      lastnameBlack.style.borderBottomColor="#ccc";
    }
  }

  function field_focusPasswordUpdate(field, password)
  {
    var passwordBlack = document.getElementById("passwordUpdateField");

    if(field.value == password)
    {
      passwordBlack.style.color="black";
      passwordBlack.style.borderColor="#ccc";
      passwordBlack.style.borderBottomColor="#ccc";
    }
  }

  function field_focusNewPasswordUpdate(field, newpassword)
  {
    var newpasswordBlack = document.getElementById("passwordUpdateNewField");

    if(field.value == newpassword)
    {
      newpasswordBlack.style.color="black";
      newpasswordBlack.style.borderColor="#ccc";
      newpasswordBlack.style.borderBottomColor="#ccc";
    }
  }

  function field_blurUpdate(field, username)
  {  
    var usernameGrey = document.getElementById("usernameUpdateField");
    var firstnameGrey = document.getElementById("FirstnameUpdateField");
    var lastnameGrey = document.getElementById("LastnameUpdateField");
    var passwordGrey = document.getElementById("passwordUpdateField");
    var newpasswordGrey = document.getElementById("passwordUpdateNewField");
    if(field.value == '')
    {
      field.value = username;
      switch(field.value) {
        case "username":
            usernameGrey.style.color="#AAAAAA";
            passwordGrey.style.color="#AAAAAA";
            newpasswordGrey.style.color="#AAAAAA";

          break;
        case "Firstname":
            firstnameGrey.style.color="#AAAAAA";

          break;
        case "Lastname":
            lastnameGrey.style.color="#AAAAAA";

        break;  

      }
    

    }
  }


  function checkFieldsUpdate(username,firstname,lastname,password,newpassword)
  {
    var usernameWrong = document.getElementById("usernameUpdateField");
    var firstnameWrong = document.getElementById("FirstnameUpdateField");
    var lastnameWrong = document.getElementById("LastnameUpdateField");
    var passwordWrong = document.getElementById("passwordUpdateField");
    var newpasswordWrong = document.getElementById("passwordUpdateNewField");


      if(username =='')
      {
        usernameWrong.style.color="red";
        usernameWrong.style.borderColor="red";
        usernameWrong.style.borderBottomColor="red";
      }
      if (firstname =='')
      {
        firstnameWrong.style.color="red";
        firstnameWrong.style.borderColor="red";
        firstnameWrong.style.borderBottomColor="red";;
      }
      if (lastname =='')
      {
        lastnameWrong.style.color="red";
        lastnameWrong.style.borderColor="red";
        lastnameWrong.style.borderBottomColor="red";
      }
      if (password =='')
      {
        passwordWrong.style.color="red";
        passwordWrong.style.borderColor="red";
        passwordWrong.style.borderBottomColor="red";
      }
      if (newpassword =='')
      {
        newpasswordWrong.style.color="red";
        newpasswordWrong.style.borderColor="red";
        newpasswordWrong.style.borderBottomColor="red";
      }
      if(password != newpassword)
      {
        passwordWrong.style.color="red";
        passwordWrong.style.borderColor="red";
        passwordWrong.style.borderBottomColor="red";

        alert("Your password is not correct");
      }

     else if (username !='' && firstname !='' && lastname !='' && password !='' && newpassword !='')
      {
          alert("Values and passwords Updated");
         // return window.location.href='Home.html';
      }
      else if (username !='' && firstname !='' && lastname !='')
      {
          alert("Values Updated");
         // return window.location.href='Home.html';
      }
  }








/*
//Fade in dashboard box
$(document).ready(function(){
    $('.box').hide().fadeIn(1000);
    });

//Stop click event
$('a').click(function(event){
    event.preventDefault(); 
  });
  */
  