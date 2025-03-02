<template>
  <div>
    <!-- 搜索框 ------------------------------------------------->
    <div class="search">
      <div class="content">
        <div class="title">你好, 世界!</div>
        <div class="input">
          <el-input v-model="input" @blur="close" @focus="open" placeholder="搜索国家、城市、目的地"></el-input>
          <el-button class="btn"><i class="iconfont icon-sousuo"></i>搜索</el-button>
        </div>
        <!-- 搜索下拉容器 -->
        <div class="list" v-show="isShow">
          <ul v-if="list.length > 0">
            <li v-for="item in list" :key="item.id">{{ item.name }}</li>
          </ul>
          <div v-if="list.length <= 0 && mark" class="loading">数据加载中...</div>
        </div>
      </div>
    </div>

    <!-- 实时热门TOP10 ----------------------------------------->
    <div class="wrapper">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      isShow: false,
      list: [],
      mark: true,
    }
  },
  watch: {//侦听器
    input(val) {
      if (!val) {
        this.isShow = false;
        return;
      }
      this.isShow = true;
      //获取输入的信息数据
      this.getDestSearch(val)
    }
  },
  methods: {
    //网络请求
    async getDestSearch(val) {
      let res = await this.$api.getDestSearch({
        keyword: val
      })
      console.log('搜索数据接口---', res.data.data.list);
      //判断无数据的情况
      this.list = res.data.data.list;
      //状态标识  无数据
      if (res.data.data.list.length == 0) {
        //查无数据 -- 加载中隐藏掉
        this.mark = false
      }
    },
    close() {
      this.isShow = false;
    },
    open() {
      if (this.input) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  background: #efefef url('@/assets/images/bg.jpg') no-repeat top;
  height: 500px;
  background-size: cover;
  display: flex;
  align-items: center;

  .content {
    width: 760px;
    margin: 0 auto;
    position: relative;

    .list {
      position: absolute;
      width: 621px;
      min-height: 100px;
      background: #fff;
      top: 146px;
      border-radius: 6px;
      overflow: hidden;
      //  padding:20px;
      font-size: 12px;
      color: #444;

      li {
        line-height: 36px;
        padding-left: 20px;
        padding-right: 20px;
        border-bottom: 1px solid #eee;
      }

      li:hover {
        background: pink;
      }

      .loading {
        color: #999;
        line-height: 100px;
        text-align: center;
      }
    }

    .title {
      font-size: 56px;
      color: #fff;
      font-weight: 700;
      text-align: center;
      text-shadow: 0 5px 5px rgb(0 0 0 / 10%);
      margin-bottom: 30px;
    }

    .input {
      display: flex;
      // 
     /deep/ .el-input__inner{
        border-radius: 4px 0 0 4px;
      }
      .btn {
        width: 160px;
        color: #fff;
        font-size: 16px;
        background-color: #28b76c;
        border: 1px solid #27ad66;
        border-radius: 0 4px 4px 0;

        .icon-sousuo {
          padding-right: 6px;
          font-size: 14px;
        }
      }

      .btn:hover {
        color: #fff;
      }

      /deep/ .el-input__inner {
        height: 50px;
      }
    }
  }
}

.wrapper {
  height: 400px;
}
</style>