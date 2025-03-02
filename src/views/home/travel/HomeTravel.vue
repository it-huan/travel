<template>
    <div class="travel">
        <h2 class="title">热门游记与话题</h2>
        <div class="container hotthread">
            <div class="slider">
                <el-carousel indicator-position="outside" :autoplay="false" arrow="never" height="630px">
                    <!-- 
                        数据格式：
                            [ [],[],[],[],[],[]]
                            第一层数组遍历是轮播图（一屏展示）
                            第二层数组遍历是一屏内的8个布局容器
                     -->
                    <el-carousel-item v-for="(item,index) in hotList" :key="index">
                        <ul class="item">   

                            <li v-for="ele in item" :key="ele.id">
                                <div class="header">
                                    <div class="pic">
                                        <img :src="ele.pic" alt="">
                                    </div>
                                    <div class="like total_replies">
                                        <!-- <i class="iconfont icon-xinxi iconfont-home"></i> -->
                                        <i class="el-icon-chat-dot-square iconfont-home"></i>
                                        <span>{{ele.total_replies}}</span></div>
                                </div>
                                <div class="bottom">
                                    <div class="info">
                                        <span class="avatar"><img :src="ele.auth.avatar" alt=""></span>
                                        <span class="txt">{{ele.auth.username}}</span>
                                    </div>
                                    <div class="caption">{{ele.title}}</div>
                                </div>
                            </li>
            

                            <!-- 静态布局 -->
                            <!-- <li>
                                <div class="header">
                                    <div class="pic">
                                        <img src="https://pic.qyer.com/album/user/4072/62/RUlSQBwFYk4/index/480x320"
                                            alt="">
                                    </div>
                                    <div class="like total_replies"><i
                                            class="iconfont-home icon-huifu"></i><span>8</span></div>
                                </div>
                                <div class="bottom">
                                    <div class="info">
                                        <span class="avatar"><img
                                                src="https://pic.qyer.com/avatar/001/76/04/79/200?v=1562780530"
                                                alt=""></span>
                                        <span class="txt">汉堡包包</span>
                                    </div>
                                    <div class="caption">
                                        丽江慢行，感受夏末美好时光（5天4夜小众不寻常之旅：泸沽湖+老君山+玉湖村+特色美食&住宿推荐）
                                    </div>

                                </div>
                            </li>
             -->
                        </ul>
                    </el-carousel-item>

                </el-carousel>

            </div>
            <div class="more"><a href="javascript:;" target="_blank">查看更多游记</a></div>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return {
            hotList:[],//热门话题
        }
    },
    mounted(){
        this.getHotTravel()
    },
    methods:{
        async getHotTravel(){
            let res =await this.$api.getHotTravel()
            console.log('热门游记与话题----',res.data.data);
            this.hotList= res.data.data;
        }
    }
}
</script>

<style scoped lang="less">
.container {
    width: 1160px;
    margin: 0 auto;
}

.travel {
    .title {

        position: relative;
        height: 74px;
        color: #636363;
        text-align: center;
        font: 36px/74px Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
    }

    .hotthread {
        height: 760px;

        .more {
            margin-top: 30px;
            text-align: center;
        }

        a {
            display: inline-block;
            box-sizing: border-box;
            border: 1px solid #ececec;
            border-radius: 3px;
            width: 220px;
            height: 50px;
            vertical-align: top;
            background: #fff;
            font: 20px/50px Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
            color: #636363;
            transition: all .2s ease-in-out;
            text-decoration: none;
            text-align: center;
        }
    }

}

.slider {
    .item {
        margin-left: -20px;
        li {
            float: left;
            margin-top: 20px;
            margin-left: 20px;
            width: 275px;
            height: 290px;
            background: #fff;

            .header {
                position: relative;
                width: 275px;
                height: 185px;

                .pic {
                    position: relative;
                    width: 275px;
                    height: 185px;
                    overflow: hidden;

                    img {
                        display: block;
                        width: 100%;
                        height: 100%;
                        transition: all 1.2s ease;
                    }


                }

                .like {
                    position: absolute;
                    right: 10px;
                    bottom: 4px;
                    color: #fff;
                    text-shadow: 0 0 2px rgb(0 0 0 / 40%);
                    font-size: 14px;

                    .iconfont-home {
                        margin-right: 4px;
                        font-size: 20px;
                        vertical-align: -3px;
                    }
                }
            }



            .bottom {
                border: 1px solid #ececec;
                border-top: 0;
                padding: 0 15px;
                height: 104px;
                position: relative;
                .info {
                    position: absolute;
                    top: -25px;
                    z-index: 1;
                    // margin-top: -25px;
                    overflow: hidden;
                    .avatar {
                        float: left;
                        padding: 4px;
                        width: 48px;
                        height: 48px;
                        background: #fff;
                        border-radius: 50%;

                        img {
                            vertical-align: top;
                            width: 100%;
                            height: 100%;
                            border-radius: 50%;
                        }
                    }

                    .txt {
                        float: left;
                        margin-top: 25px;
                        margin-left: 6px;
                        width: 180px;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        font-size: 14px;
                        color: #636363;
                    }
                }

                .caption {
                    position: absolute;
                    bottom: 20px;
                    padding-top: 12px;
                    height: 48px;
                    font: 700 16px/24px Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
                    overflow: hidden;
                }
            }
        }
    }
}
</style>