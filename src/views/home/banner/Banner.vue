<template>
    <div>
        <!-- 
            carousel
                interval	自动切换的时间间隔，单位为毫秒	number	—	3000
                height	走马灯的高度
                initial-index	初始状态激活的幻灯片的索引，从 0 开始
                indicator-position	指示器的位置	string	outside/none
                arrow	切换箭头的显示时机	string	always/hover/never	hover
                loop	是否循环显示	boolean
                direction	走马灯展示的方向	string	horizontal/vertical	horizontal
         -->
        <el-carousel arrow="always" class="carousel">
            <el-carousel-item>
                <img src="@/assets/images/banner1.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="@/assets/images/banner2.jpg" alt="">
            </el-carousel-item>
            <el-carousel-item>
                <img src="@/assets/images/banner3.jpg" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style lang="less" scoped>
.carousel{
    width: 100%;
    max-height: 640px;
   /deep/ .el-carousel__container{
        max-height: 640px;
        height: 528px;
    }
    img{
        width: 100%;
        height: 100%;
    }
}
</style>