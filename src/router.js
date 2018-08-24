/*global Vue*/
import Router from 'vue-router'
import Login from '@/components/login/login'
import home from '@/components/home'
import register from '@/components/login/register'

Vue.use(Router)
const router = new Router({
    mode: 'abstract',
    routes: [
        {
            path: '*',
            redirect: '/home'
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/home',
            name: 'home',
            component: home
        }
    ]
})



module.exports = router;