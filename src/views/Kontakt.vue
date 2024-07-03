<script>
import ContactForm from '@/components/ContactForm.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Contact',
  components: {
    ContactForm
  }
}
</script>

<template>
    <div class="contact-page">
      <h1>Kontakt</h1>
      <ContactForm />
    </div>
</template>


<style scoped>
.contact-page {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.contact-page h1 {
  margin-bottom: 30px;
}
</style>