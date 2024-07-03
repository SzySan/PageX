<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="login">
      <h2>Zaloguj się</h2>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Hasło:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Zaloguj</button>
      </form>
    </div>
  </template>
  
  <script>
import {$} from 'jquery';

  // eslint-disable-next-line no-unused-vars
  function Login(){
    var obj = {
      Email : $('#email').val(),
      Password: $('#password').val()
    }
    $.ajax({
      type : 'Post',
        dataType : 'json',
            url: 'http://localhost:5081/api/Register/Login',
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
  }
  // export default {
  //   data() {
  //     return {
  //       email: '',
  //       password: ''
  //     };
  //   },
  //   methods: {
  //     async login() {
  //       try {
  //         const response = await fetch('http://localhost:5081/api/Login/Login', {
  //           method: 'POST',
  //           headers: { 'Content-Type': 'application/json' },
  //           body: JSON.stringify({ email: this.email, password: this.password })
  //         });
  //         if (response.ok) {
  //           alert('Zalogowano pomyślnie');
  //           this.$router.push('/profile');
  //         } else {
  //           alert('Błąd logowania');
  //         }
  //       } catch (error) {
  //         console.error('Error:', error);
  //         alert('Błąd logowania');
  //       }
  //     }
  //   }
  // };
  </script>
  
  <style scoped>
  .login {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .login h2 {
    text-align: center;
  }
  .login div {
    margin-bottom: 15px;
  }
  .login label {
    display: block;
    margin-bottom: 5px;
  }
  .login input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  .login button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>

