/* 
    路由器对象
*/

import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
    // 所有路由组件
    routes: [{
        path: '/msite',
        meta: {
            showFooter: true
        },
        component: MSite
    }, {
        path: '/search',
        meta: {
            showFooter: true
        },
        component: Search
    }, {
        path: '/order',
        meta: {
            showFooter: true
        },
        component: Order
    }, {
        path: '/profile',
        meta: {
            showFooter: true
        },
        component: Profile
    }, {
        path: '/',
        redirect: '/msite'
    }, {
        path: '/login',
        component: Login
    }]
})