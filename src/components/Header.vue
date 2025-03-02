<template>
    <!-- 
        menu 菜单容器
        menu-item 菜单每一项内容
        submenu 二级下拉菜单
            menu-item 下拉菜单内容
            menu-item 下拉菜单内容

        属性：
        menu
            default-active   当前激活菜单的 index
            mode="horizontal"菜单模式 默认垂直    horizontal水平方向 horizontal / vertical
            background-color 菜单颜色
            text-color       文字颜色   active-text-color 选中文字高亮色 
            router	是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转

        submenu 二级下拉菜单
            index	唯一标志	string/null

        menu-item 菜单每一项内容
            index	唯一标志	string
            disabled	是否禁用	boolean
     -->
    <div class="header">
        <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" background-color="#323232"
            text-color="#fff" active-text-color="#10b041" router>
            <el-menu-item index="/" style="border-bottom:none;">
                <img src="@/assets/images/logo.png" width="70px" alt="">
            </el-menu-item>
            <el-menu-item index="/dest">目的地</el-menu-item>
            <el-menu-item index="/community">社区</el-menu-item>
            <el-menu-item index="/travel">行程助手</el-menu-item>
            <el-submenu  index="5">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
        </el-menu>
        <div class="header-right">
            <template v-if="userinfo.username">
                <span>{{userinfo.username}} </span>
                <span @click="exit">退出登录 </span>
            </template>
          <router-link to="/login" v-else>登录</router-link>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
    data() {
        return {
            activeIndex: '/'
        }
    },
    computed:{
        ...mapState('user',['userinfo']),
    },  

    methods:{
       ...mapMutations('user',['deleteUser']),
        exit(){
            //清空本地存储-----------------------------
            localStorage.removeItem('user');
            //清空vuex 
            this.deleteUser()
            //返回首页
            this.$router.push('/')

        }
    }

}
</script>

<style lang="less" scoped>
.header{
    display: flex;
    background: #323232;
    color: #fff;
   .header-right{
        padding: 0 30px;
        line-height:40px;
        font-weight: 700;
        font-size: 14px;
        a{
            color: #fff;
        }
    }
    .el-menu-demo{
        flex: 1;
        font-size: 16px;
        font-weight: 700;
        padding-left:30px;
        .el-menu-item{
            height: 40px;
            line-height: 40px;
        }
    }
    /deep/ .el-menu--horizontal>.el-submenu .el-submenu__title{
            height: 40px !important;
            line-height: 40px;
        }
    .el-menu.el-menu--horizontal{
        border-bottom: none;
    }
}
</style>