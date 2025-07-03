// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Cart from '../components/Cart.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import SingleProduct from '@/components/SingleProduct.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/product',
        name: 'SingleProduct',
        component: SingleProduct
        // props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    //   scrollBehavior(to, from, savedPosition) {
    //      // Don't scroll on Home page
    //     if (to.name === 'Home') {
    //       return false
    //     }
    //     // Always scroll to top
    //     return { top: 0 }
    //   }
    scrollBehavior(to, from, savedPosition) {
        // If coming **from Home**, save position
        if (from.name === 'Home' && savedPosition) {
            return savedPosition
        }

        // If going **to Home**, keep scroll (don't jump to top)
        if (to.name === 'Home') {
            return savedPosition
        }

        // Default: scroll to top
        return { top: 0 }
    }
})

export default router
