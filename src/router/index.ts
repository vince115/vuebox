import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Boxxy from '../views/Boxxy.vue'
import User from '../views/User.vue'
const routes =[
    {
        path:'/',
        name:'Home',
        component: Home
    },
    {
        path:'/box',
        name:'Boxxy',
        component: Boxxy
    },
    {
        path:'/user',
        name:'User',
        component: User
    }
]

const router = createRouter({
    history: createWebHistory('/vuebox/'),
    routes
})

export default router;