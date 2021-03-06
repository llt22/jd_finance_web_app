import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from '../money/index.vue'
import Ious from '../ious/index'
import Raise from '../raise/index'
import Download from '../special/download'

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
        {
            path: "/ious",
            name: "ious",
            component: Ious,
        },
        {
            path: "/raise",
            name: "raise",
            component: Raise,
        },
        {
            path: "/download",
            name: "download",
            component: Download,
        },

    ],
})
