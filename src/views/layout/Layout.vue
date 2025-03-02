<template>
  <div>
    <!-- 公共的导航区域 -->
    <Header></Header>

    <router-view></router-view>

    <!-- 公共的底部 -->
    <Footer></Footer>

  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components:{
    Header,
    Footer
  }
}
</script>

<style>

</style>