import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Home,
        children: [{
            path: '',
            name: 'main',
            component: () =>
                import ('../views/main/Main')
        }]
    }, {
        path: '/login',
        component: Home,
        children: [{
            path: '',
            name: 'login',
            component: () =>
                import ('../views/Login/Login')
        }]
    }, {
        path: '/topic/:id',
        component: Home,
        children: [{
            path: '',
            name: 'detail',
            component: () =>
                import ('../views/detail/Detail')
        }]
    }, {
        path: '*',
        name: 'error',
        component: () => ('../views/error')
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router