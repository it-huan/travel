import router from './index'
import store from '../store/index'
//配置导航守卫
router.beforeEach((to,from,next)=>{
    //判断进入这个路由界面的时候是否需要登录
    if(to.meta.isLogin){//需要登录
      //判断是否登录过
      //   next('/login')
      //判断是否登录  vuex数据
      if(store.state.user.userinfo.isLogin){
          next()
      }else{
        console.log('to---login----to',to);
        //即将进入登录界面了，存储上一刻即将进入的路径 目的：登录后跳转到对应的想进入的界面
        store.commit('changePath',to.path)
        next('/login')
      }
    }else{
      //不需要登录
      next()
    }
})