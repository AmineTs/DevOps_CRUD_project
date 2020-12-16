//const users = require('../src/controllers/user');
//const axios = require('axios');
//onst user = require('../controllers/user');

//const { exists } = require("../dbClient");




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
        (async () => {
          if(await getting(username)!=0)
          {
            alert("Username don't  exist please change")
            usernameWrong.style.color="red";
            usernameWrong.style.borderColor="red";
            usernameWrong.style.borderBottomColor="red";
          }
          else
          {
            (async () => {
              if(await gettingpass(username,password)!=0)
              {
                alert("Password don't exist please change")
                passwordWrong.style.color="red";
                passwordWrong.style.borderColor="red";
                passwordWrong.style.borderBottomColor="red";
              }
              else
              {
                console.log("NEXT PAGE")
                var username_connected = username;
                localStorage.setItem("Key", username_connected);
                return window.location.href='Home.html';
              }
            })()
          }
        })()
          
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

    if(field.value == "firstname")
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
        (async () => {
          if(await getting(username)!=0)
          {
            console.log("NEXT PAGE")
            createSignUp(username,firstname,lastname,password);
            var username_connected = username;
            localStorage.setItem("Key", username_connected);
            return window.location.href='Home.html';
          }
          else
          {
            alert("Username already exist please change")
            usernameWrong.style.color="red";
            usernameWrong.style.borderColor="red";
            usernameWrong.style.borderBottomColor="red";
          }
        })()
        

        
      }
  }


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
  fetch("/user", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

}

async function getting (username,count)
{
 const result = await fetchget(username,count)
 return result;
}


async function fetchget(username,count)
{
  var getusername=0;
  var count=0;
  requestOptions = 
  {
     method: 'GET',
     redirect: 'follow'
  };
const exist = await fetch("/user/", requestOptions,getusername, count)
.then(res => res.json())
.then(res => {        
  getusername=res.msg;  
  for(var i =0; i<getusername.length;i++)
  {
    if(getusername[i]==username)
      {
        count++;
      }
    } 
    if(count==0)
    {
      console.log("user don't exist");
      return 1;
    }
    else
    {
      console.log("user already exist");
      return 0;
    }
  });
  
  return exist;
}


  function disconnect()
  {
    return window.location.href='/'
  }


  async function gettingpass (username,password)
  {
   const result = await fetchgetpass(username,password)
   return result;
  }
  
  
  async function fetchgetpass(username,password)
  {
    var getpass=0;
    var count=0;
    requestOptions = 
    {
       method: 'GET',
       redirect: 'follow'
    };
  const exist = await fetch("/user/"+username, requestOptions,getpass)
  .then(res => res.json())
  .then(res => {        
    getpass=res.msg;  
    
    if(getpass.password==password)
    {
      console.log("password is ok");
      return 0;
    }
    else
    {
      console.log("password is not the same");
      return 1;
    }
  });
    
    return exist;
  }
  
  
  








  async function getcurrentfield()
  {
   const result = await fetchgetcurrent();
   var username = document.getElementById("usernameUpdateField");
   var firstname = document.getElementById("FirstnameUpdateField");
   var lastname = document.getElementById("LastnameUpdateField");
   var username_curr = localStorage.getItem("Key");
   var firstname_curr = localStorage.getItem("Key_firstname");
   var lastname_curr = localStorage.getItem("Key_lastname");

   username.value=username_curr;
   firstname.value=firstname_curr;
   lastname.value=lastname_curr;


   return result;
  }
  
  
  async function fetchgetcurrent()
  {
    var get=0;
    var username_connected = localStorage.getItem("Key");
    requestOptions = 
    {
       method: 'GET',
       redirect: 'follow'
    };
  const exist = await fetch("/user/"+username_connected, requestOptions,get)
  .then(res => res.json())
  .then(res => {        
    get=res.msg;  
    
    var curr_user = get.username;
    localStorage.setItem("Key_username", curr_user);
    var curr_firstname = get.firstname;
    localStorage.setItem("Key_firstname", curr_firstname);
    var curr_lastname = get.lastname;
    localStorage.setItem("Key_lastname", curr_lastname);
    var curr_password = get.password;
    localStorage.setItem("Key_password", curr_password);
  });
    
    return exist;
  }






   function field_focusUsernameUpdate(field, username)
  {
    var usernameBlack = document.getElementById("usernameUpdateField");
    var username_curr = localStorage.getItem("Key");

    usernameBlack.style.color="black";
    usernameBlack.style.borderColor="#ccc";
    usernameBlack.style.borderBottomColor="#ccc";
 
  }

  function field_focusFirstnameUpdate(field, firstname)
  {
    var firstnameBlack = document.getElementById("FirstnameUpdateField");
    firstnameBlack.style.color="black";
    firstnameBlack.style.borderColor="#ccc";
    firstnameBlack.style.borderBottomColor="#ccc";

   
 
  }

  function field_focusLastnameUpdate(field, lastname)
  {
    var lastnameBlack = document.getElementById("LastnameUpdateField");
    lastnameBlack.style.color="black";
    lastnameBlack.style.borderColor="#ccc";
    lastnameBlack.style.borderBottomColor="#ccc";

  }

  function field_focusPasswordUpdate(field, password)
  {
    var passwordBlack = document.getElementById("passwordUpdateField");
    passwordBlack.style.color="black";
    passwordBlack.style.borderColor="#ccc";
    passwordBlack.style.borderBottomColor="#ccc";
 
  }

  function field_focusNewPasswordUpdate(field, newpassword)
  {
    var newpasswordBlack = document.getElementById("passwordUpdateNewField");
    newpasswordBlack.style.color="black";
    newpasswordBlack.style.borderColor="#ccc";
    newpasswordBlack.style.borderBottomColor="#ccc";

  }

  function field_blurUpdate(field, username)
  {  
    var usernameGrey = document.getElementById("usernameUpdateField");
    var firstnameGrey = document.getElementById("FirstnameUpdateField");
    var lastnameGrey = document.getElementById("LastnameUpdateField");
    var passwordGrey = document.getElementById("passwordUpdateField");
    var newpasswordGrey = document.getElementById("passwordUpdateNewField");
    var username_curr = localStorage.getItem("Key");
    var firstname_curr = localStorage.getItem("Key_firstname");
    var lastname_curr = localStorage.getItem("Key_lastname");
    if(field.value == '')
    {
      field.value = username;
      switch(field.value) {
        case username_curr:
            usernameGrey.style.color="#AAAAAA";
            passwordGrey.style.color="#AAAAAA";
            newpasswordGrey.style.color="#AAAAAA";

          break;
        case firstname_curr:
            firstnameGrey.style.color="#AAAAAA";

          break;
        case lastname_curr:
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



     else if (username !='' && firstname !='' && lastname !='' && password !='' && newpassword !='')
      {

        (async () => {
          var username_curr = localStorage.getItem("Key");
          if(await gettingpass(username_curr,password)!=0)
          {
            alert("Password don't exist please change")
            passwordWrong.style.color="red";
            passwordWrong.style.borderColor="red";
            passwordWrong.style.borderBottomColor="red";
          }
          else
          {  
            (async () => {
              if(await updatefield(username, firstname, lastname, newpassword)!=0)
              {
                alert("Values and passwords Updated");
                var username_conn = username;
                localStorage.setItem("Key", username_conn);
                return window.location.href='Home.html';
              }
              

          })()

          }
        })()

      }
      else if (username !='' && firstname !='' && lastname !='')
      {
        newpassword =localStorage.getItem("Key_password");
        (async () => {
          if(await updatefield(username, firstname, lastname, newpassword)!=0)
          {
            alert("Values Updated");
            var username_conn = username;
            localStorage.setItem("Key", username_conn);
            return window.location.href='Home.html';
          }
        })()

      }
  }

  async function updatefield(username, firstname, lastname, newpassword)
  {
   const result = await fetchupdate(username, firstname, lastname, newpassword);
   return result;
  }
  
  
  async function fetchupdate(username, firstname, lastname, newpassword)
  {
    var get=0;
    var username_connected = localStorage.getItem("Key");
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Access-Control-Allow-Origin', '*');
    myHeaders.append('Access-Control-Allow-Credentials', 'true');
    myHeaders.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    myHeaders.append("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token");

    var raw = JSON.stringify({"username":username,"firstname":firstname,"lastname":lastname,"password":newpassword});

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    const exist = fetch("/user/"+username_connected, requestOptions)
    .then(res => res.json())
    .then(res => {        
      if(res.status == "success")
      {
        return 1;
      }
      else
      {
        return 0;
      }
     
      
     
    });
    
    return exist;
  }







function fetchdelete()
{ 
  
  var myHeaders = new Headers();
  var username_connected = localStorage.getItem("Key");
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Access-Control-Allow-Origin', '*');
  myHeaders.append('Access-Control-Allow-Credentials', 'true');
  myHeaders.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  myHeaders.append("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token");
    var requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect : 'follow'
  };
  fetch("/user/"+username_connected, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  console.log(" USER DELETED");
  return window.location.href='/';

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
  