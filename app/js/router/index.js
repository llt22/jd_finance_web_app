import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from '../money/index.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            redirect: {name: 'home'}
        },
        {
            path: "/home",
            name: "home",
            component: Home,
        },
        {
            path: "/money",
            name: "money",
            component: Money,
        },
    ],
})
