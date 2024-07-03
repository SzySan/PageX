<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<script>
import { RouterLink } from 'vue-router';

export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'Footer'
}
</script>

<template>
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2024 PageX. Wszelkie prawa zastrzeżone.</p>
        <ul class="footer-links">
          <li><RouterLink to="/polityka-prywatnosci">>Polityka prywatności</RouterLink></li>
          <li><RouterLink to="/kontakt">Kontakt</RouterLink></li>
        </ul>
      </div>
    </footer>
  </template>

  <style scoped>
  .footer {
    width: 100%;
    padding: 20px;
    background-color: #333;
    color: #fff;
    text-align: center;
    box-sizing: border-box;
  }
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-links {
    list-style: none;
    padding: 0;
  }
  
  .footer-links li {
    display: inline;
    margin: 0 10px;
  }
  
  .footer-links a {
    color: #fff;
    text-decoration: none;
  }
  
  .footer-links a:hover {
    text-decoration: underline;
  }
    </style>