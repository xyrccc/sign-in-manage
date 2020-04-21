<template>
  <div class="table_box">

  <div class="title">
    账号管理
  </div>

  <el-card>
  <el-form ref="form" :model="form">
    <el-form-item label="*类型：">
      {{form.userType}}
    </el-form-item>
    <el-form-item label="*账号：">
      {{form.username}}
    </el-form-item>
    <el-form-item label="*密码：">
      {{form.password}}
      <el-button type="text" icon="el-icon-view" @click="showPassword"></el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="text" @click="changePassword">修改密码</el-button>
      <el-button type="text" @click="signOut">退出登陆</el-button>
    </el-form-item>
  </el-form>
  </el-card>

  </div>
</template>

<script>
    export default {
        data() {
            return {
                pwd:localStorage.getItem("password"),
                form:{
                    userType:localStorage.getItem("userType"),
                    username:localStorage.getItem("username"),
                    password:'******'
                }
            };
        },
        methods:{
            showPassword(){
                if(this.form.password=='******'){
                    this.form.password=this.pwd;
                }
                else{
                    this.form.password='******';
                }
            },
            changePassword(){
                this.$router.push({path:'/manage/Admin_Password'})
            },
            signOut(){
                this.$router.push({path:'/'})

            }
        }
    }
</script>
<style scoped>

  .title{
    font-size: large;
    text-align: left;
  }
  .el-form-item{
    text-align: left;
  }
</style>
