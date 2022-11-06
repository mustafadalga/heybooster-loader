import { createApp } from 'vue'
import LoaderPlugin from "@/LoaderPlugin";
import App from './App.vue'


const app = createApp(App);

app.use(LoaderPlugin).mount('#app')

