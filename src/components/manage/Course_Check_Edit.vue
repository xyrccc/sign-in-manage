<template>
  <div class="table_box">

    <div class="title">
      <el-button type="text" class="title" size="mini" @click="goBack">课程管理>课程详情>课程详情编辑</el-button>
    </div>
<!--    <div class="title">-->
<!--      课程管理>课程详情>课程详情编辑-->
<!--    </div>-->

    <el-card>
      <el-form label-width="auto">
        <el-form-item label="*学号：" prop="id">
          <el-col :span="8">
            <el-input v-model="id" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*姓名：" prop="name">
          <el-col :span="8">
            <el-input v-model="name" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*学院：" prop="major">
          <el-col :span="8">
            <el-input v-model="major" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*班级：" prop="classroom">
          <el-col :span="8">
            <el-input v-model="classroom" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*性别：" prop="sex">
          <el-col :span="8">
            <el-radio v-model="radio" label="1">男</el-radio>
            <el-radio v-model="radio" label="2">女</el-radio>
          </el-col>
        </el-form-item>
        <el-form-item label="*正常签到：" prop="normalSignIn">
          <el-col :span="8">
            <el-input v-model="normalSignIn" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*迟到/早退：" prop="lateOrEarly">
          <el-col :span="8">
            <el-input v-model="lateOrEarly" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*缺勤次数：" prop="absence">
          <el-col :span="8">
            <el-input v-model="absence" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*请假次数：" prop="leave">
          <el-col :span="8">
            <el-input v-model="leave" ></el-input>
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
                id:'',
                name:'',
                major:'',
                classroom:'',
                normalSignIn:'',
                lateOrEarly:'',
                absence:'',
                leave:'',
                radio:'1',
                sex: ''
            }
        },

        mounted(){
        },

        methods: {
            goBack(){
                this.$router.push({path:'/manage/Course_Check'});
            },
            confirm(){
                if(this.radio==1){
                    this.sex='男'
                }
                else{
                    this.sex='女'
                }
                this.$axios
                    .post('/api/editCourseInfo',{
                        params:{
                            index:localStorage.getItem("studentId"),
                            studentId:this.id,
                            studentName:this.name,
                            major:this.major,
                            classroom:this.classroom,
                            normalSignIn:this.normalSignIn,
                            lateOrEarly:this.lateOrEarly,
                            absence:this.absence,
                            leave:this.leave,
                            sex:this.sex
                        }
                    })
                    .then((res) => {
                        let jsonObj=res.data;
                        let success=res.success;
                        let message=res.message;
                        console.log(jsonObj)
                        if(success==true){
                            this.$alert("编辑成功");
                            this.$router.push({path:'/manage/Course_Check'})
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
                this.$router.push({path:'/manage/Course_Check'})
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

