import {createApp} from 'vue'

import App from './App.vue'
import ElementPlus from 'element-plus'
import * as ElIcon from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import {useAxios} from "@/assets/axios_config";
import router from "@/router";
const app = createApp(App)
// app.use(createPinia())
app.use(router)

app.config.globalProperties.$axios = useAxios();
app.config.globalProperties.$router=router


for (let iconName in ElIcon){
    app.component(iconName, ElIcon[iconName])
}

app.use(ElementPlus)
app.mount('#app')
