
import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUserFriends, faVideo, faBell, faSearch, faCaretDown, faNoteSticky, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add( faHome, faUserFriends, faVideo, faBell, faSearch, faCaretDown, faNoteSticky, faComment);

const app = createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');

// app.use(createPinia())

app.mount('#app')
