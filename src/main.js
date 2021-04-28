import { createApp } from 'vue'
import App from './App.vue'
import HabitTrackForm from './components/HabitTrackForm.vue';
import Habits from './components/Habits.vue';

const app = createApp(App)

app.component('habit-track-form', HabitTrackForm);
app.component('habits', Habits);
app.mount('#app')
