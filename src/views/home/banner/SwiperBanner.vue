<template>
    <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
            <img src="@/assets/images/banner1.jpg" width="100%" alt="">
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/banner2.jpg" width="100%" alt="">
        </swiper-slide>
        <swiper-slide>
            <img src="@/assets/images/banner3.jpg" width="100%" alt="">
        </swiper-slide>
        <!-- 轮播点 -->
        <div class="swiper-pagination" slot="pagination"></div>
        <!--  -->
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>

<script>
export default {
    data() {
        return {
            swiperOptions: {//swiper配置信息
                //分页器
                pagination: {
                    el: '.swiper-pagination'
                },
                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                //自动轮播
                loop: true,
                autoplay: {
                    delay: 3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                }
            }
        }
    }
}
</script>

<style>

</style>