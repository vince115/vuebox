import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Box from '../views/Box.vue'
import User from '../views/User.vue'
import Test from '../views/Test.vue'
const routes =[
    {
        path:'/',
        name:'Home',
        component: Home
    },
    {
        path:'/login',
        name:'Login',
        component: Login
    },
    {
        path:'/box',
        name:'Box',
        component: Box
    },
    {
        path:'/user',
        name:'User',
        component: User
    },
    {
        path:'/test',
        name:'test',
        component: Test
    }   
]


const router = createRouter({
    history: createWebHistory('/vuebox/'),
    routes
})

export default router;