import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import Layout from "../views/layout/Layout.vue";
import Login from '../views/login/Login.vue'
const About = () => import("../views/AboutView.vue")
const Destination=()=>import('../views/destination/Index.vue')
const Travel=()=>import('../views/travel/Travel.vue')
const Community=()=>import('../views/community/Community.vue')
// 在VueRouter上配置路由跳转，在router中的index.js中加上以下代码，注意加在use之前
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
    return routerPush.call(this, location).catch(err => {})
};

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path:'/dest',
        component:Destination,
        meta:{
          isLogin:true
        }
      },
      {
        path:'/travel',
        component:Travel,
        meta:{
          isLogin:true
        }
      },
      {
        path:'/community',
        component:Community,
        meta:{
          isLogin:true
        }
      },
      {
        path: "/about",
        name: "about",
        component:About,
      },
    ],
  },
  {
    path:'/login',
    name:'login',
    component:Login
  }
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});


export default router;
