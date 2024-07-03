<!-- eslint-disable vue/no-unused-components -->
<!-- eslint-disable vue/no-reserved-component-names -->
<!-- eslint-disable no-unused-vars -->
<script>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import FileUpload from './components/FileUpload.vue'


export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    FileUpload
    
  }
}
</script>

<template>
    <div id="app">
      <Navbar />
      <main>
        <RouterView />
      </main>
      <Footer />
    </div>
  </template>

  <style>
main {
  padding-top: 60px;
  min-height: calc(100vh - 60px - 60px); /* Height of header and footer */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
</style>