import {createApp} from 'vue'

import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {useAxios} from "@/assets/axios_config";
import router from "@/router";
const app = createApp(App)
// app.use(createPinia())
app.use(router)


app.config.globalProperties.$axios = useAxios();
app.config.globalProperties.$router=router
app.use(ElementPlus)
app.mount('#app')
