<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->


<template>
    <div class="register">
      <h2>Zarejestruj się</h2>
      <form @submit.prevent="register">
        <div>
            <label for="username">Nazwa Użytkownika:</label>
            <input type="username" id="username" v-model="username" required />
        </div>
        
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Hasło:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Zarejestruj</button>
      </form>
    </div>
  </template>
  
  <script>

  import {$} from 'jquery'

  // eslint-disable-next-line no-unused-vars
  function SaveForm(){

    var name = $('#user').val();
    var pwd = $('#Password').val();
    var email = $('Email').val();

    if(name == "" || pwd == "" || email == "")
    {
        $('#message1').hide();
        $('message2').hide();
        return false;
    }

    var obj = {
        Username : name,
        Email : email,
        Password : pwd 
    };

    $.ajax({
        type : 'Post',
        dataType : 'json',
            url: 'http://localhost:5081/api/Register/RegisterNewUser',
            data: JSON.stringify(obj),
            contentType : 'aplication/json; charset=utf-8',
            success : function(result)
            {
              console.log(result);
              
            },
            error : function(result){
              console.log(result);
            } 
    })
  }; 

  

//   import $ from 'jquery'


//   export default {
//   data() {
//     return {
//       username: '',
//       email: '',
//       password: ''
//     };
//   },
//   methods: {
//     register() {
//       $.ajax({
//         url: 'http://localhost:5081/api/Register/RegisterNewUser',
//         type: 'POST',
//         contentType: 'application/json',
//         data: JSON.stringify({
//           username: this.username,
//           email: this.email,
//           password: this.password
//         }),
//         success: () => {
//           alert('Zarejestrowano pomyślnie');
//           this.$router.push('/login');
//         },
//         error: (jqXHR, textStatus, errorThrown) => {
//           alert('Błąd rejestracji: ' + errorThrown);
//         }
//       });
//     }
//   }
// };
  </script>
  
  <style scoped>
  .register {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .register h2 {
    text-align: center;
  }
  .register div {
    margin-bottom: 15px;
  }
  .register label {
    display: block;
    margin-bottom: 5px;
  }
  .register input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  .register button {
    width: 100%;
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>