<template>
    <div class="login-container">
      <img class="bg" src="../../../static/images/bg3.png" ></img>
      <h3 class="name">签到管理系统</h3>
        <el-form :model="ruleForm" :rules="rules"
         status-icon
         ref="ruleForm"
         label-position="left"
         label-width="0px"
         class="demo-ruleForm login-page">
          <h3 class="title" >用户登录</h3>
            <el-radio v-model="radio" label="1">管理员登陆</el-radio>
            <el-radio v-model="radio" label="2">教师登陆</el-radio>
            <el-form-item prop="username">
                <el-input type="text"
                    v-model="ruleForm.username"
                    auto-complete="off"
                    placeholder="请输入工号"
                    prefix-icon="el-icon-user"
                ></el-input>
            </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password"
                        v-model="ruleForm.password"
                        auto-complete="off"
                        placeholder="请输入密码"
                        prefix-icon="el-icon-lock"
                    ></el-input>
                </el-form-item>
<!--            <el-checkbox-->
<!--                v-model="checked"-->
<!--            >记住密码</el-checkbox>-->
            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
<!--                <el-button type="text" @click="forget">忘记密码</el-button>-->
            </el-form-item>
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
            ruleForm: {
                username:'',
                password:'',
                userType:'',
            },
            rules: {
                username: [{required: true, message: 'please enter your account', trigger: 'blur'}],
                password: [{required: true, message: 'please enter your password', trigger: 'blur'}]
            },
        }
    },
    methods: {
        handleSubmit(event){
            if(this.radio==1){
                this.ruleForm.userType ='admin'
            }
            else{
                this.ruleForm.userType ='teacher'
            }

            this.$refs.ruleForm.validate((valid) => {
                if(valid){
                    // this.$axios
                    //     .get('/api/login',{
                    //         params:{
                    //             username:this.ruleForm.username,
                    //             password:this.ruleForm.password,
                    //             userType:this.ruleForm.userType
                    //         }
                    //     })
                    //     .then((res) => {
                    //         let jsonObj=res.data;
                    //         let success=res.success;
                    //         let message=res.message;
                    //         console.log(jsonObj)
                    //         if(success==true){
                    //             localStorage.setItem("username",jsonObj.username);
                    //             localStorage.setItem("password",jsonObj.password);
                    //             localStorage.setItem("userType",jsonObj.userType);
                    //             this.logining = true;
                    //             this.$router.push({path:'/manage/SignIn'});
                    //         }
                    //         else {
                    //             this.$alert(message);
                    //         }
                    //     })
                    //     .catch(function (error) {
                    //         console.log(error);
                    //     });
                    this.logining = true;
                    if(this.radio=='1'){
                     localStorage.setItem("userType",'管理员（admin）');
                     console.log(localStorage.getItem("userType"))
                    } else {
                        localStorage.setItem("userType",'教师（teacher）');
                        console.log(localStorage.getItem("userType"))
                    };
                    localStorage.setItem("username",this.ruleForm.username);
                    localStorage.setItem("password",this.ruleForm.password);
                    this.$router.push({path:'/manage/SignIn'});
                }
            })
        },
        forget(){
            this.$router.push({path:'/ForgetPassword'});        }
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
