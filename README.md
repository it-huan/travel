## Vue 框 ui 库

1. vant 库 -- 移动端 \*\*
2. Mint UI
3. Antd vue
   官网：https://www.antdv.com/docs/vue/introduce-cn
4. element-ui -- pc 后台 \*\*

## Element-ui 库

1. 安装 vue/cli 脚手架
   vue add element

2. 基本使用

## 项目安装依赖
1. Vue 全家桶 vue + vue-router + vuex + axios +Element
2. 项目初始化 css normalize.css
   npm i normalize.css -S
   import 'normalize.css'
3. vue add element
4. npm i axios -S

## 首页制作


## vue父子组件的生命周期顺序（重点-面试）
###  加载渲染过程 *****
   父beforeCreate=>父created=>父beforeMount=>子beforeCreate=>子created=>子beforeMount=>子mounted=>父mounted
父组件---beforeCreate
父组件---created
父组件---beforeMount
子组件---beforeCreate
子组件---created
子组件---beforeMount
子组件---mounted--------------------
父组件---mounted

### 子组件更新过程
   父beforeUpdate=>子beforeUpdate=>子updated=>父updated

### 父组件更新过程
   父beforeUpdate=>父updated

### 销毁过程 *****

父beforeDestroy=>子beforeDestroy=>子destoryed=>父destoryed


## 路由权限
1. 需求文档
   1. 进入首页随意进入
   2. 进入目的地 社区 行程指南 必须登录校验
   3. 登录的时候任意的账号和密码 --- 模拟登录


## 登录
1. vuex存储登录信息
2. 说明
   vuex说明数据共享组件 -- （跨组件数据交互通信 共享数据）
   登录账号或者token字段可以存储本地存储 不一定是vuex  只是vuex也可以用存储登录信息 
3. 我们练习vuex把登录状态存储vuex 
4. 分析存储的格式  




## swiper 轮播
1. 参考网址：https://github.com/surmon-china/vue-awesome-swiper
2. 使用步骤：
   1. 安装： npm install swiper@5.x vue-awesome-swiper@4.x --save
   2. main.js 导入文件
     ```js
        import VueAwesomeSwiper from 'vue-awesome-swiper'
        import 'swiper/css/swiper.css'
        Vue.use(VueAwesomeSwiper)
     ```
   3. 组件使用
   ```vue
   <template>
     <swiper ref="mySwiper" :options="swiperOptions">
       <swiper-slide>Slide 1</swiper-slide>
       <swiper-slide>Slide 2</swiper-slide>
       <swiper-slide>Slide 3</swiper-slide>
       <swiper-slide>Slide 4</swiper-slide>
       <swiper-slide>Slide 5</swiper-slide>
       <div class="swiper-pagination" slot="pagination"></div>
     </swiper>
   </template>
   ```
   4. 参数配置
      ```js
      <script>
      export default {
          name: 'carrousel',
          data() {
          return {
              swiperOptions: {
              pagination: {
                  el: '.swiper-pagination'
              },
              // Some Swiper option/callback...
              }
          }
          },
          computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper
            }
          },
          mounted() {
            console.log('Current Swiper instance object', this.swiper)
            this.swiper.slideTo(3, 1000, false)
          }
      }
      </script>
      ```



## 穷游接口

1. 今日推荐：
   https://www.qyer.com/qcross/home/index.php?action=recommend&timer=1638347951752&ajaxID=59b0b70acebeb65c1882399e

2. 穷游商城
   https://www.qyer.com/qcross/home/index/recommendbiz?page=1

3. 热门游记
   https://www.qyer.com/qcross/home/ajax?action=thread
4. 搜索
   https://www.qyer.com/qcross/home/ajax?action=hotelsearch&keyword=%E4%BA%91&type=1

5. biu biu 接口
   https://www.qyer.com/qcross/biu/index/web?page=0&limit=20&sort=hot&is_empty=0

6. 图片防盗链 ---- 403
<meta name="referrer" content="never">

7. 热门城市
   https://bang.360.cn/aj/getcitycode


8. 搜索接口
   https://www.qyer.com/qcross/place/public.php?action=placesearch&keyword=q&client=web
   

9. 目的地接口搜索
   https://place.qyer.com/qcross/place/public.php?action=placesearch&keyword=55&client=web

10. 目的地 数据
   https://place.qyer.com/qcross/place/public.php?action=placetop10


11. 社区接口
   1. 游记攻略
      https://bbs.qyer.com/index.php?action=getTravels&page=1

   2. 结伴旅行
      https://bbs.qyer.com/index.php?action=getTogether&page=1
