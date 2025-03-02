<template>
  <div class="home">
    <!-- ----轮播区域------------------------------------ -->
    <div class="banner">
      <!-- 轮播图组件 -->
      <!-- <Banner></Banner> -->
      <SwiperBanner></SwiperBanner>
      <!-- 搜索框内容 -->
      <div class="search">
        <div :class="{ bg: isShow }">
          <el-row>
            <el-col :span="8" :offset="8">
              <!-- 搜索框效果：
                    1. 聚焦显示热门城市
                    2. 失去焦点热门城市隐藏
                    3. 输入内容 显示搜索列表  热门城市隐藏
                    4. 输入内容 又删除--输入的值为空 搜索列表隐藏  热门城市显示
                    5. 输入的值存在 失去焦点 隐藏搜索列表
                    6. 输入的值存在 聚焦     显示搜索列表
              -->
              <div class="input-bg">
                <el-input v-model="input" @focus="getInput" @blur="laveInput" placeholder="请输入内容"></el-input>
                <el-button>搜索</el-button>
              </div>
              <!-- 显示内容区域--热门城市  聚焦会显示 输入的内容为空显示 -->
              <div class="list" v-show="isShow">
                <p class="info">温馨提示：可以直接输入城市的中文、英文来匹配检索</p>
                <div class="title">热门城市</div>
                <div class="hot-citys">
                  <a href="##" v-for="item in hotcity" :key="item.id">{{ item.name }}</a>
                </div>
              </div>
              <!-- 显示搜索的列表内容展示-----  -->
              <ul class="search-list" v-show="isShowList">
                <li v-for="item in searchList" :key="item.id">
                  {{ item.name }} <span class="subname">{{ item.en_name }}</span>
                  <!-- {{item.province.name}} -->
                  <!-- {{item.province.name}} {{item.country.name}} -->
                  <!--{{item.city.name}}   -->
                </li>

              </ul>

            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <!-- -----两个图片----------------------------------- -->
    <div class="section section-gray">
      <div class="wrapper">
        <ul>
          <li>
            <img src="@/assets/images/left.jpg" width="740px" alt="">
          </li>
          <li>
            <img src="@/assets/images/right.jpg" width="400px" alt="" />
          </li>
        </ul>
      </div>
    </div>
    <!-- -----今日推荐----------------------------------- -->
    <div class="section">
      <div class="wrapper">
        <div class="title-th">
          <a href="##" class="notice"><span>出境游安全提示</span></a>今日推荐
        </div>
        <div class="content">
          <el-row :gutter="20">
            <el-col :span="6" v-for="(item, index) in todyInfo" :key="index">
              <div class="item">
                <img :src="item.data.pic" width="275px" height="185px" alt="">
                <div class="info">
                  <div class="subtitle">{{ item.data.subject }}</div>
                  <div class="bottom">

                    <template v-if="item.type == 'video'">
                      <span class="fr">{{ item.data.tag }}</span>
                      <span class="f14">{{ item.data.desc }}</span>
                    </template>
                    <template v-else-if="item.type == 'bbs'">
                      <span class="fr">{{ item.data.views }}人浏览过</span>
                      <span class="f14">{{ item.data.username }}</span>
                    </template>
                    <template v-else>
                      <!-- 指令：{{ }} v-text=''  v-html='变量' -->
                      <span class="fr money" v-html="item.data.price"></span>
                      <span class="f14">{{ item.data.start_pos }}</span>
                    </template>
                  </div>
                </div>
              </div>
            </el-col>

          </el-row>
        </div>
        <!-- <div class="content">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="item">
                <img src="@/assets/images/right.jpg" alt="">
                <div class="info">
                  <div class="subtitle">文字介绍</div>
                  <div class="bottom">
                    <span class="fr">291赞</span>
                    <span class="f14">余余252</span>
                  </div>
                </div>
              </div>
            </el-col>

          </el-row>
        </div> -->
      </div>
    </div>

    <!-- 穷游商城 ----------------------------------------->
    <HomeShop :shopList="shopList" @getMoreShop="getMoreShop"></HomeShop>
    <!-- 热门游记与话题------------------------------------>
    <HomeTravel></HomeTravel>
    
    <!-- 返回顶部组件 element-ui -->
    <el-backtop ></el-backtop>
  </div>
</template>

<script>
import Banner from './banner/Banner.vue'
import SwiperBanner from './banner/SwiperBanner.vue'
import HomeShop from './shop/HomeShop.vue'
import HomeTravel from './travel/HomeTravel.vue'
export default {
  name: 'HomeView',
  components: {
    Banner,
    SwiperBanner,
    HomeShop,
    HomeTravel
  },
  data() {
    return {
      input: '',
      isShow: false,//是否显示热门城市
      isShowList: false,//是否显示搜索框
      hotcity: [],//热门城市名称
      searchList: [],//搜索列表容器
      todyInfo: [],//今日推荐
      shopList:[],//商城数据
      page:0,//换一换的页码
    }
  },
  watch: {
    //监听input 
    input(val, old) {
      // console.log('监听input ----',val,old);
      if (!val) {
        this.isShow = true;
        this.isShowList = false;
        return '';
      }
      //输入值：热门城市--隐藏 搜索列表展示
      this.isShow = false;
      this.isShowList = true;
      //网络请求--------------------
      this.$api.getSearch({
        keyword: val
      }).then(res => {
        console.log('搜索列表---网络请求----', res.data);
        this.searchList = res.data.data.list
      })

    }
  },
  methods: {
    //获取焦点显示---下拉搜索框
    getInput() {
      if (this.input) {
        this.isShowList = true;
        return;
      }
      this.isShow = true;
    },
    //失去焦点
    laveInput() {
      this.isShow = false;
      this.isShowList = false;
    },
    //获取当前热门城市---------------------------------------
    async getHotCity() {
      let res = await this.$api.getHotCity()
      console.log('获取当前热门城市-------', res.data.result.hotcity);
      this.hotcity = res.data.result.hotcity;
    },
    //获取今日推荐--------------------------------------
    async getTodyInfo() {
      let res = await this.$api.getTodyInfo();
      console.log('获取今日推荐----------', res.data.data);
      this.todyInfo = res.data.data;
    },
    //获取商城----------------------------------------
    async getHomeShop(page){
      let res = await this.$api.getHomeShop(page)//{page:xx}
      console.log('获取商城---',res.data);
      //数据有尽头---和给你接口的后端人员沟通  什么字段标识作为结束  
      this.shopList= res.data.data
    },
    //获取更多商城接口
    getMoreShop(){
      this.page++;
      console.log('获取更多商城接口',this.page);
      this.getHomeShop({
        page:this.page
      })
    }
  },
  beforeCreate(){
    // console.log('父组件---beforeCreate');
  },
  created() {
    // console.log('父组件---created');
    //1. 获取当前的热门城市-------------------
    this.getHotCity();
    //2. 获取今日推荐----------
    this.getTodyInfo();
    //3. 获取商城接口 
    this.getHomeShop({
      page:this.page
    });

  },
  beforeMount(){
    // console.log('父组件---beforeMount');
  },
  mounted(){
    // console.log('父组件---mounted');

  }
}
</script>

<style lang="less" scoped>
.bg {
  background: rgba(255, 255, 255, .6);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding-top: 300px;
}
//轮播图-------------------------------
.banner {
  position: relative;

  .search {
    position: absolute;
    width: 100%;
    top: 50%;
    z-index: 99;

    // transform: translateY('-50%');
    .input-bg {
      // background: red;
      border-radius: 6px;
      background-image: linear-gradient(90deg, rgba(40, 213, 164, .8), rgba(38, 208, 181, .8));
      display: flex;
      align-items: center;
      padding: 10px;
    }
  }

  //热门城市
  .list {
    width: 100%;
    height: 240px;
    background: #fff;
    box-sizing: border-box;
    padding: 20px;

    .info {
      font-size: 12px;
      color: #999;
    }

    .title {
      padding: 10px 0;
      border-bottom: 1px solid #eee;

    }

    .hot-citys {
      a {
        display: inline-block;
        margin: 20px 30px 10px 0;
        font-size: 14px;
        color: #666;
        text-decoration: none;
      }
    }
  }

  //搜索列表容器
  .search-list {
    width: 100%;
    min-height: 60px;
    background: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 6px;
    margin-top: -5px;

    li {
      // line-height: 40px;
      padding: 12px;
      font-size: 14px;
    }

    .subname {
      color: #999;
    }
  }
}

// 居中容器----------------------------------
.section {
  position: relative;
  padding: 10px 0;
  min-width: 1160px;
}

.wrapper {
  margin: 0 auto;
  width: 1160px;
  position: relative;
}

// 两个图片----------------------------------
.section.section-gray {
  border-color: #ececec;
  border-style: solid;
  border-width: 1px 0;
  background-color: #f5f5f5;

  ul {
    overflow: hidden;
    margin-right: -20px;
    // height: 110px;
  }

  ul li {
    float: left;
    margin-right: 20px;
    height: 110px;
    border-radius: 3px;
    overflow: hidden;
    transition: all .2s ease-in-out;
  }
}

// 今日推荐------------------------------------
.title-th {
  margin: 10px;
  height: 74px;
  color: #636363;
  text-align: center;
  font: 36px/74px Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;

  .notice {
    background: #02db94;
    border-radius: 20px;
    width: 180px;
    height: 40px;
    line-height: 40px;
    color: #fff;
    font-size: 16px;
    text-align: center;
    display: block;
    position: absolute;
    left: 0;
    top: 17px;

    span:before {
      content: "";
      display: inline-block;
      background: url(https://fes.qyerstatic.com/FoHcIRgBY9BWd6lSLxr6NVArmEaL);
      background-size: 16px 16px;
      vertical-align: -2px;
      height: 16px;
      width: 16px;
      margin-right: 8px;
    }

    span:after {
      content: "";
      display: inline-block;
      background: url(https://fes.qyerstatic.com/FkvmdDl4snzkbZzyQCrfMQMBeicW);
      background-size: 7px 11px;
      width: 7px;
      height: 11px;
      margin-left: 8px;
    }
  }
}

.content {
  .item {
    width: 275px;
    height: 300px;
    margin-bottom: 20px;
  }

  .info {
    padding: 0 18px;
    border: 1px solid #ececec;
    border-top: 0;
    height: 114px;
    line-height: 24px;
    overflow: hidden;

    .subtitle {
      margin-top: 14px;
      height: 48px;
      font-size: 16px;
      overflow: hidden;
    }

    .bottom {
      margin-top: 16px;
      height: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #636363;
      font-size: 12px;
      font-weight: 700;
      .fr {
        color: #959595;
        float: right;
      }
      .money{
       /deep/ em{
          font-size: 18px;
          color: #ff7466 !important;
        }
      }
      .f14 {
        display: inline-block;
        max-width: 60%;
        min-width: 50%;
        color: #636363;
        font-size: 14px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
}
</style>
