import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../store/auth'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Box from '../views/Box.vue'

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
    } 
]

const router = createRouter({
    history: createWebHistory('/vuebox/'),
    routes
})

router.beforeEach((to)=>{

    // if(to.name =='Login' && !useAuthStore().token){
    //     //return { name:'Login' }
    //     router.push({ name: "Home" });
    // }
    
})

export default router;