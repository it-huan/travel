<template>
    <div class="shop">
        <div class="container">
            <div class="title">穷游商城</div>
            <!-- 缓一缓 -->
            <a href="javascript:;" class="change" @click="changeShopList">换一换</a>
            <ul class="list">

                <li class="card" v-for="item in shopList" :key="item.id">
                    <div class="pic">
                        <img :src="item.pic" alt="">
                    </div>
                    <div class="desc">
                        <div class="title">{{ item.title }}</div>
                        <div class="mark">{{ item.tag }}</div>
                        <!-- price -->
                        <div class="price" v-html="'￥' + item.price"></div>
                    </div>
                </li>
                <!-- 静态布局 -->
                <!-- <li class="card">
                    <div class="pic">
                        <img src="https://pic.qyer.com/FqSjHBvWEBY_dzt277uHmJVpRweQ/300x300" alt="">
                    </div>
                    <div class="desc">
                        <div class="title">标题</div>
                        <div class="mark">信息</div>
                        <div class="price">￥<span>2000</span>元起</div>
                    </div>
                </li> -->

            </ul>
            <div class="more">
                <a href="javascript:;" target="_blank" data-v-7c300386="">查看更多商品</a>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    props: {
        shopList: {
            type: Array,
            default: function () {
                return []
            }
        }
    },
    methods: {
        //点击换一换---切换下面的商城信息---换一换--下一页数据接口
        changeShopList() {
            //调用父组件的方法
            this.$emit('getMoreShop')
        }
    }
    //getHomeShop()接口名称
    // beforeCreate() {
    //     console.log('子组件---beforeCreate');
    // },
    // created() {
    //     console.log('子组件---created');
    // },
    // beforeMount() {
    //     console.log('子组件---beforeMount');
    // },
    // mounted() {
    //     console.log('子组件---mounted');
    // }
}
</script>

<style lang="less" scoped>
.shop {
    background: linear-gradient(180deg, #6dd27c, #1bcdae);
    // min-height: 200px;

    .container {
        width: 1160px;
        margin: 0 auto;
        position: relative;
        padding-bottom: 20px;
        .change {
            position: absolute;
            top: 56px;
            right: 0;
            padding-left: 1.4em;
            color: #fff;
            background: url(https://fes.qyerstatic.com/Fv2FsRrsqF3KeHTCW1iUvxLxakBC) 0/auto 70% no-repeat;
            text-decoration: none;
        }
    }

    .title {
        padding-top: 10px;
        position: relative;
        height: 74px;
        color: #fff;
        text-align: center;
        font: 36px/74px Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
    }

    .list {
        margin-right: -17px;
        overflow: hidden;
        position: relative;

        // padding-bottom: 30px;
        .card {
            float: left;
            position: relative;
            margin-bottom: 30px;
            margin-right: 17px;
            width: 375px;
            overflow: hidden;
            background: #fff;
        }

        .pic {
            float: left;
            width: 160px;
            height: 160px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .desc {
            padding-left: 170px;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-right: 10px;

            .title {
                display: -webkit-box;
                max-height: 52px;
                font-size: 16px;
                color: #000;
                font-weight: 700;
                line-height: 26px;
                overflow: hidden;
                text-align: left;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }

            .mark {
                display: inline-block;
                padding: 0 6px;
                box-sizing: border-box;
                border-radius: 2px;
                font-size: 14px;
                line-height: 18px;
                height: 20px;
                border: 1px solid #4a90e2;
                color: #4a90e2;
            }

            .price {
                position: absolute;
                bottom: 6px;
                right: 15px;
                font-size: 20px;
                color: #ff7362;

                /deep/ em {
                    font-size: 30px;
                    font-weight: 400;
                }
            }
        }
    }

    .more {
        // margin-top: 30px;
        text-align: center;
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
</style>