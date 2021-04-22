import { createApp } from 'vue'
import App from './App.vue'
import HabitTrack from './components/HabitTrack.vue';

const app = createApp(App)

app.component('habit-track', HabitTrack);
app.mount('#app')
