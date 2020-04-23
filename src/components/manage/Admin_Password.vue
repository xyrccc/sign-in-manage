<template>
  <div class="table_box">

    <div class="title">
      <el-button type="text" class="title" size="mini" @click="goBack">账号管理>修改密码</el-button>
    </div>
<!--    <div class="title">-->
<!--      账号管理>修改密码-->
<!--    </div>-->

    <el-card>
      <el-form :model="ruleForm" :rules="rules"
               status-icon
               ref="ruleForm"
               label-position="left"
               label-width="auto"
               class="demo-ruleForm">
        <el-form-item prop="newPwd">
          <el-col :span="6">
          <el-input type="password"
                    v-model="ruleForm.newPwd"
                    auto-complete="off"
                    placeholder="请输入新密码"
          ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item prop="newPwd2">
          <el-col :span="6">
          <el-input type="password"
                    v-model="ruleForm.newPwd2"
                    auto-complete="off"
                    placeholder="再次输入新密码"
                    minlength="2"
          ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item prop="question">
          <el-col :span="6">
            <el-select v-model="ruleForm.question" placeholder="请选择新的密保问题">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item prop="answer">
          <el-col :span="6">
            <el-input type="text"
                      v-model="ruleForm.answer"
                      auto-complete="off"
                      placeholder="请输入密保答案"
            ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-col :span="8">
            <el-button type="primary" @click="handleSubmit">提交</el-button>
            <el-button type="primary" plain @click="cancel">取消</el-button>
          </el-col>
        </el-form-item>
      </el-form>
    </el-card>

  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                ruleForm: {
                    newPwd:'',
                    newPwd2:'',
                    question: '',
                    answer:''
                },
                rules: {
                    newPwd: [{required: true, message: 'please enter your new password', trigger: 'blur'}],
                    newPwd2: [{required: true, message: 'please check your new password', trigger: 'blur'}],
                    question: [{required: true, message: 'please pick your new question', trigger: 'change'}],
                    answer: [{required: true, message: 'please enter your answer', trigger: 'blur'}],
                },
                options: [{
                    value: '选项1',
                    label: '你妈妈的名字'
                }, {
                    value: '选项2',
                    label: '你爸爸的名字'
                },{
                    value: '选项2',
                    label: '你的名字'
                }],
            };
        },
        mounted(){
            console.log(this.ruleForm.newPwd)
            console.log(this.ruleForm.newPwd2)
        },
        methods:{
            goBack(){
                this.$router.push({path:'/manage/Admin'});
            },
            handleSubmit(event){
                this.$refs.ruleForm.validate((valid) => {
                    if(valid){
                        let pwd=this.ruleForm.newPwd;
                        let pwd2=this.ruleForm.newPwd2;
                        if(pwd==pwd2){
                            localStorage.setItem("password",this.ruleForm.newPwd);
                            localStorage.setItem("question",this.ruleForm.question);
                            localStorage.setItem("answer",this.ruleForm.answer);
                            //修改密码接口
                            this.$alert('成功修改密码！');
                        }
                        else{
                            this.$alert('两次密码不同！');
                        }
                    }
                })
            },
            cancel(){
                this.$router.push({path:'/manage/Admin'})
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
