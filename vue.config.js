const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {//360帮
        target: "https://bang.360.cn",
        // ws: true,
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
        }
      },
      "/foo": {//穷游首页接口
        target: "https://www.qyer.com",
        changeOrigin: true,
        pathRewrite:{
          '^/foo':''
        }
      },
      "/boo":{//穷游目的接口
        target: "https://place.qyer.com",
        changeOrigin: true,
        pathRewrite:{
          '^/boo':''
        }
      }
    },
  },
});
