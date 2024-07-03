<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-unused-components -->
<script >
import Welcome from '@/components/Welcome.vue';
import ContactForm from '@/components/ContactForm.vue';
import About from '@/components/About.vue'
import Opis from '@/components/Opis.vue'

export default {
  
  name: 'home',
  components: {
      Welcome,
      ContactForm,
      About,
      Opis
  }
}
</script>

<template>
<div class="home">
  <div class="welcome-container">
    <Welcome userName="Jan Kowalski" />
  </div>
  <div class="grid-container">
    <div class="about-container">
      <About />
    </div>
    <div class="opis-container">
      <Opis />
    </div>
  </div>
  
    
 </div>
</template>

<style>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  background-color: #e9ebee;
  min-height: 100vh;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
  max-width: 1600px;
  margin-bottom: 20px;
}
.grid-item {
  display: flex;
  justify-content: center;
  align-items: stretch;
}

.welcome-container {
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
  flex-grow: 1;
}

.opis-container,
.about-container {
  width: 100%;
  height: 100vh;
  max-width: 800px;
  margin-top: auto;
}
</style>
