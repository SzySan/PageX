<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission (e.g., send data to server)
      console.log('Form submitted:', {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message
      });

      // Clear form fields
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
    }
  }
}
</script>





<template>
    <div class="contact-form">
      <h2>Skontaktuj się z nami</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Imię:</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="email">E-mail:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="subject">Temat:</label>
          <input type="text" id="subject" v-model="subject" required />
        </div>
        <div class="form-group">
          <label for="message">Wiadomość:</label>
          <textarea id="message" v-model="message" required></textarea>
        </div>
        <button type="submit">Wyślij</button>
      </form>
    </div>
  </template>

  <style scoped>
.contact-form {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-sizing: border-box;
}

.contact-form h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.form-group textarea {
  resize: vertical;
  height: 100px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
 