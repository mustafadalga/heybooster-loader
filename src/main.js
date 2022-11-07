import { createApp } from 'vue'
import App from './App.vue'
import Loader from "@mustafadalga/loading-spinner";
import "@mustafadalga/loading-spinner/style.css"
const app = createApp(App);

app.use(Loader).mount('#app')

