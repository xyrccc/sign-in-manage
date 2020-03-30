<template>
    <div class="login-container">
      <img class="bg" src="../../../static/images/bg3.png" ></img>
      <h3 class="name">签到管理系统</h3>
        <el-form :model="ruleForm2" :rules="rules2"
         status-icon
         ref="ruleForm2"
         label-position="left"
         label-width="0px"
         class="demo-ruleForm login-page">
          <h3 class="title" >用户登录</h3>
            <el-radio v-model="radio" label="1">管理员登陆</el-radio>
            <el-radio v-model="radio" label="2">教师登陆</el-radio>
            <el-form-item prop="username">
                <el-input type="text"
                    v-model="ruleForm2.username"
                    auto-complete="off"
                    placeholder="请输入工号"
                ></el-input>
            </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password"
                        v-model="ruleForm2.password"
                        auto-complete="off"
                        placeholder="请输入密码"
                    ></el-input>
                </el-form-item>
<!--            <el-checkbox-->
<!--                v-model="checked"-->
<!--            >记住密码</el-checkbox>-->
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
            </el-form-item>
            <el-link type="primary" >忘记密码？</el-link>
        </el-form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            radio: '1',
            logining: false,
            ruleForm2: {
                username:'',
                password:'',
            },
            rules2: {
                username: [{required: true, message: 'please enter your account', trigger: 'blur'}],
                password: [{required: true, message: 'please enter your password', trigger: 'blur'}]
            },
        }
    },
    methods: {
        handleSubmit(event){
            this.$refs.ruleForm2.validate((valid) => {
                if(valid){
                    this.logining = true;
                    this.$router.push({path:'/manage/SignIn'});
                }
            })
        }
    }
};
</script>

<style scoped>
.login-container {
    width: 100vw;
    height: 100vh;
}
.bg{
  width: 100vw;
  height: 100vh;
}
.name{
  top: 24vh;
  left: 58vw;
  right: 0;
  bottom: 0;
  position: absolute;
  margin: auto;
  color: white;
  font-size: xx-large;
}
.title{
  font-size: x-large;
  color: #0F98FF;
}
.login-page {
  top: 12vh;
  left: 58vw;
  right: 0;
  bottom: 0;
  position: absolute;
  margin: auto;
  width: 19vw;
  height: 40vh;
  padding: 0px 30px 50px;
  background: #fff;
  border: 1px solid #eaeaea;
}
</style>
