import {createRouter,createWebHashHistory} from "vue-router"

const routes = [
    {
        //登录界面
        path:'/', //由/决定默认打开的是什么
        name:'home',
        component:()=>import(/*webpackChunkName:'Login'*/'@/page/home/home.vue')
    },
    {
        path: '/people',
        name:'people',
        component:()=>import(/*webpackChunkName:'Login'*/'@/page/people/people.vue')
    },
    {
        path: '/research',
        name:'research',
        component:()=>import(/*webpackChunkName:'Login'*/'@/page/research/research.vue')
    }
]

const router = createRouter(
    {
        history:createWebHashHistory(),
        routes
    }
)

export default router