<template>
  <div class="table_box">

    <div class="title">
      <el-button type="text" class="title" size="mini" @click="goBack">课程管理>课程详情>学生签到详情>学生签到详情编辑</el-button>
    </div>
<!--    <div class="title">-->
<!--      课程管理>课程详情>学生签到详情>学生签到详情编辑-->
<!--    </div>-->

    <el-card>
      <el-form label-width="auto">
        <el-form-item label="*课程日期：" prop="courseDate">
          <el-col :span="8">
            <el-input v-model="courseDate" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*时间段：" prop="time">
          <el-col :span="8">
            <el-input v-model="time" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*签到时间：" prop="signInTime">
          <el-col :span="8">
            <el-input v-model="signInTime" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*签退时间：" prop="signOutTime">
          <el-col :span="8">
            <el-input v-model="signOutTime" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*签到情况：" prop="signInState">
          <el-col :span="8">
            <el-input v-model="signInState" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-col :span="8">
            <el-button type="primary" @click="confirm">确定</el-button>
            <el-button type="primary" @click="cancel">取消</el-button>
          </el-col>
        </el-form-item>
      </el-form>
    </el-card>

  </div>
</template>
<script>
    export default {
        data() {
            return {
                courseDate:'',
                time:'',
                signInTime:'',
                signOutTime:'',
                signInState:'',
            }
        },

        mounted(){
        },

        methods: {
            goBack(){
                this.$router.push({path:'/manage/Course_Check_Check'});
            },
            confirm(){
                this.$axios
                    .post('/api/editStudentSignInInfo',{
                        params:{
                            index:localStorage.getItem("courseTime"),
                            courseDate:this.courseDate,
                            time:this.time,
                            signInTime:this.signInTime,
                            signOutTime:this.signOutTime,
                            signInState:this.signInState,
                        }
                    })
                    .then((res) => {
                        let jsonObj=res.data;
                        let success=res.success;
                        let message=res.message;
                        console.log(jsonObj)
                        if(success==true){
                            this.$alert("编辑成功");
                            this.$router.push({path:'/manage/Course_Check_Check'})
                        }
                        else {
                            this.$alert(message);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            cancel(){
                this.$router.push({path:'/manage/Course_Check_Check'})
            },
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

