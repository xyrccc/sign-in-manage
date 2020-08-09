<template>
  <div class="forgetPwd-container">

      <el-form :model="ruleForm" :rules="rules"
               status-icon
               ref="ruleForm"
               label-position="left"
               label-width="auto"
               class="demo-ruleForm forgetPwd-page">
        <el-form-item prop="question">
            <el-select v-model="ruleForm.question" placeholder="请选择你的密保问题">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
        </el-form-item>
        <el-form-item prop="answer">
            <el-input type="text"
                      v-model="ruleForm.answer"
                      auto-complete="off"
                      placeholder="请输入密保答案"
            ></el-input>
        </el-form-item>
        <el-form-item prop="newPwd">
            <el-input type="password"
                      v-model="ruleForm.newPwd"
                      auto-complete="off"
                      placeholder="请输入新密码"
            ></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="handleSubmit">提交</el-button>
            <el-button type="primary" plain @click="cancel">取消</el-button>
        </el-form-item>
      </el-form>

  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                ruleForm: {
                    newPwd:'',
                    question: '',
                    answer:''
                },
                rules: {
                    newPwd: [{required: true, message: 'please enter your new password', trigger: 'blur'}],
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
        methods:{
            handleSubmit(event){
                this.$refs.ruleForm.validate((valid) => {
                    if(valid){
                        let oldQuestion=localStorage.getItem("question");
                        let oldAnswer=localStorage.getItem("answer");
                        if(this.ruleForm.question==oldQuestion&&this.ruleForm.answer==oldAnswer){
                            //修改密码接口
                            localStorage.setItem("password",this.ruleForm.newPwd);
                            localStorage.setItem("question",this.ruleForm.question);
                            localStorage.setItem("answer",this.ruleForm.answer);
                            this.$alert('密码修改成功！');
                        }
                        else{
                            this.$alert('密保验证错误！');
                        }
                    }
                })
            },
            cancel(){
                this.$router.push({path:'/'})
            }
        }
    }
</script>
<style scoped>
  .forgetPwd-container {
    width: 100vw;
    height: 100vh;
  }
  .bg{
    width: 100vw;
    height: 100vh;
  }
  .forgetPwd-page {
    top: 0vh;
    left: 0vw;
    right: 0;
    bottom: 0;
    position: absolute;
    margin: auto;
    width: 30vw;
    height: 40vh;
    padding: 40px 30px 40px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .el-form-item{
    text-align: left;
  }
</style>
