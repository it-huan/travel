import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import state from './state'
import mutations from './mutations'
//1. 导入vuex持久化
import createPerState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  modules: {
    user
  },
  //2. 注入vuex插件
  plugins:[
    createPerState({
      key:'user',//存储的键名 localStorage.setItem('key'，xxx),
      paths:['user'],//指定存储的模块名称 只有配置上的模块才会存储
      //不指定模块名称 忽略paths属性 默认存储所有的state数据
    })
  ]
  
})
