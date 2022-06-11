import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BanglaView from "@/views/BanglaView";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/bn',
        name: 'bn',
        component: BanglaView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
