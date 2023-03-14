import {createApp} from 'vue'

import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import {createPinia} from 'pinia'
import {useAxios} from "@/assets/axios_config";

const app = createApp(App)
// app.use(createPinia())
// app.use(router)


app.config.globalProperties.$axios = useAxios();
app.use(ElementPlus)
app.mount('#app')
