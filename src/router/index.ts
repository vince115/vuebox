import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Boxs from '../views/Boxs.vue'
import Boxx from '../views/Boxx.vue'
import User from '../views/User.vue'
const routes =[
    {
        path:'/',
        name:'Home',
        component: Home
    },
    {
        path:'/boxs',
        name:'Boxs',
        component: Boxs
    },
    {
        path:'/boxx',
        name:'Boxx',
        component: Boxx
    },
    {
        path:'/user',
        name:'User',
        component: User
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;