<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names


<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { RouterLink } from 'vue-router';

export default {
  name: 'Navbar',
  components: {
    RouterLink,
    FontAwesomeIcon
  },
  data() {
    return{
      dropdownVisible: false
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    }
  }
};

</script>

<template>
  <div class="navbar">
    <div class="navbar__left">
      <font-awesome-icon icon="facebook" class="navbar__icon" />
      <div class="navbar__search">
        <font-awesome-icon icon="search" />
        <input type="text" placeholder="Wyszukaj" />
      </div>
    </div>
    <div class="navbar__center">
      <RouterLink to="/">
        <font-awesome-icon icon="home" class="navbar__icon" />
      </RouterLink>
      <RouterLink to="/friends">
        <font-awesome-icon icon="user-friends" class="navbar__icon" />
      </RouterLink>
      <RouterLink to="/upload">
        <font-awesome-icon icon="note-sticky" class="navbar__icon" />
      </RouterLink>
      <font-awesome-icon icon="comment" class="navbar__icon" />
    </div>
    <div class="navbar__right">
      <div class="navbar__profile">
        <span>Mój Profil</span>
      </div>
      <div class="navbar__dropdown">
        <font-awesome-icon icon="caret-down" class="navbar__icon" @click="toggleDropdown" />
        <div v-if="dropdownVisible" class="navbar__dropdown-content">
          <RouterLink to="/profile" class="navbar__dropdown-item">Profil</RouterLink>
          <RouterLink to="/login" class="navbar__dropdown-item">Zaloguj</RouterLink>
          <RouterLink to="/register" class="navbar__dropdown-item">Zarejestruj</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3b5998;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  box-sizing: border-box;
}

.navbar__left,
.navbar__center,
.navbar__right {
  display: flex;
  align-items: center;
}

.navbar__icon {
  color: white;
  font-size: 24px;
  margin: 0 10px;
  cursor: pointer;
}

.navbar__search {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 5px 10px;
}

.navbar__search input {
  border: none;
  outline: none;
  margin-left: 5px;
}

.navbar__profile {
  display: flex;
  align-items: center;
  color: white;
}

.navbar__dropdown {
  position: relative;
  display: inline-block;
}

.navbar__dropdown-content {
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  color: black;
  right: 0;
  top: 100%;
  margin-top: 10px;
  border-radius: 4px;
}

.navbar__dropdown-item {
  color: black;
  text-decoration: none;
  display: block;
  padding: 8px 0;
}

.navbar__dropdown-item:hover {
  background-color: #ddd;
}
</style>

