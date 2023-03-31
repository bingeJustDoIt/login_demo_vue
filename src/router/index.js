import {createRouter, createWebHistory} from 'vue-router'
import Login from "@/views/Login.vue";
import Home from "@/views/backEnd/Home.vue";
import Game1 from "@/views/backEnd/game/Game1.vue";
import Game2 from "@/views/backEnd/game/Game2.vue";
import Game3 from "@/views/backEnd/game/Game3.vue";
import Main from "@/views/frontEnd/Main.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/main',
            name: 'main',
            component: Main,
            children: [
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
            {
            path: '/home',
            name: 'home',
            component: Home,
            children: [
                {
                    path: '/game/1',
                    name: 'game1',
                    component: Game1
                },
                {
                    path: '/game/2',
                    name: 'game2',
                    component: Game2
                },
                {
                    path: '/game/3',
                    name: 'game3',
                    component: Game3
                },
            ]
        },


    ]
})

export default router
