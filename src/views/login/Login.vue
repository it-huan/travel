<template>
  <div class="login">
    <!-- 登录弹框 -->
    <div class="login-wrapper">
      <div class="login-logo"><img src="http://fes.qyerstatic.com/fe_ssr_passport/41bd0a522fbeb024a41208a408ca73ec.png"
          alt="穷游">
        <span class="title">登录</span>
      </div>
      <div class="login-content">
        <el-row>
          <el-col :span="14">
            <div class="login-box">
              <!-- 
                el-form 表单组件
                    :model="loginForm"  表单的数据 获取表单输入的信息
                    label-width="100px" 表单标题占据宽度 
                    :rules="rules"      表单的验证规则
                    ref="ruleForm"      ref获取form组件
                    status-icon         验证图标

                el-form-item 表单的每一项内容
                    label="账号" 表单标题
                    prop="pass"  表单的字段 必须加

                <el-input v-model="loginForm.username"></el-input> 输入框

               -->
              <el-form :model="loginForm" status-icon :rules="rules" ref="ruleForm" label-width="40px">
                <el-form-item label="账号" prop="username">
                  <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                  <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
              <div class="friend">输入任意的账号admin和密码123才可以登录</div>
            </div>
          </el-col>
          <el-col :span="10">
            <img src="@/assets/images/login-img.jpg" width="100%" height="100%" alt="">
          </el-col>
        </el-row>
      </div>

    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  data() {
      //规则：输入value为空 报错  输入value值 通过校验规则
      var validateUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        loginForm: {//表单存储的容器
          username: '',
          password: '',
        },
        rules: {//表单的验证规则
          username: [
            { validator: validateUser, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    computed:{
      ...mapState(['path'])
    },  
    created(){
      console.log('路由信息',this.$route);
    },  
    methods: {
      ...mapMutations('user',['setUser']),
      //提交事件----------------------
      submitForm(formName) {
        //获取ref  
        //this.$refs.ruleForm.方法--element提供的方法
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('校验通过--可以登录了',this.loginForm);
            //网络请求--nodejs-----------模拟
            if(this.loginForm.username =='admin' && this.loginForm.password=='123'){
              //登录成功
              //假设成功--后端返回的数据
              let obj={
                username:this.loginForm.username,
                isLogin:true,
                token:'hello success'
              }
              //存储vuex 
              this.setUser(obj)
              // this.$store.commit('user/setUser',obj)
              //数据持久化
              // localStorage.setItem('user',JSON.stringify(obj))
              //返回要进入的界面\ vuex仓库
              // this.$router.go(-1);
              this.$router.push(this.path)

            } else{
              //登录失败
              this.$message.error('账号或者密码错误了');
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      //重置表单---清空------------------
      resetForm(formName) {
        //1. element-ui库提供的清空表单方法
        // this.$refs[formName].resetFields();
        //2. 自己清空表单内容
        this.loginForm={
          username: '',
          password: '',
        }
      }
    }
}
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  background: url('@/assets/images/login.jpg') no-repeat;
  background-size: cover;
}

.login-wrapper {
  margin: 0 auto;
  padding: 60px 0;
  width: 650px;
}

.login-wrapper .login-logo {
  text-align: center;
}

.login-logo img {
  border: 0;
  height: 46px;
  vertical-align: middle;
}

.login-logo .title {
  font-size: 24px;
  font-family: Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun, sans-serif;
  color: #fff;
  vertical-align: bottom;
  text-shadow: 0 0 4px rgb(0 0 0 / 30%);
}

.login-box {
  padding: 30px 20px;
  padding-top: 60px;
}

.login-content {
  width: 650px;
  overflow: hidden;
  background: #fff;
  height: 400px;
  margin-top: 45px;
}
.friend{
  color: #999;
  font-size: 12px;
  padding-left: 40px;
}
</style>