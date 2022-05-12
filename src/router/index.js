import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "../views/Home.vue";
import Majiang from "../majiang/pages/Index";
import MajiangAi from "../majiang/pages/Index";
import AllMajiang from "../majiang/pages/Index";
import DavinceCode from "../davincecode/pages/DavinceCode"
import DavinceCodeCard from "../davincecode/pages/DavincecodeCards"

const routes = [

    {path: "/", component: Home,},
    {path: "/Majiang", component: Majiang,},
    {path: "/MajiangAi", component: MajiangAi},
    {path: "/AllMajiang", component: AllMajiang,},
    {path: "/DavinceCode", component: DavinceCode,},
    {path: "/DavinceCodeCard", component: DavinceCodeCard,}
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
