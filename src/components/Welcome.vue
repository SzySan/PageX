
<template>
    <div class="welcome">
      <h1>Witaj na stronie PageX</h1>
      <h1>{{ userName }}!</h1>
      <p>Cieszymy się, że jesteś z nami.</p>
    </div>
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Welcome',
    props: {
      userName: {
        type: String,
        required: true,
        default: 'Użytkowniku'
      }
    }
  }
  </script>
  
  <style>
  .welcome {
    width: 100%;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  text-align: center;
  box-sizing: border-box;
  }
  </style>