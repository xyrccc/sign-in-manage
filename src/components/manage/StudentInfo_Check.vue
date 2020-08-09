<template>
  <div class="table_box">

    <div class="title">
      <el-button type="text" class="title" size="mini" @click="goBack">学生信息管理>学生信息详情</el-button>
    </div>
<!--    <div class="title">-->
<!--      学生信息管理>学生信息详情-->
<!--    </div>-->

    <el-card>
      <el-form label-width="auto">
        <el-form-item label="*学号：" prop="id">
          <el-col :span="8">
            {{this.id}}
          </el-col>
        </el-form-item>
        <el-form-item label="*姓名：" prop="name">
          <el-col :span="8">
            {{this.name}}
          </el-col>
        </el-form-item>
        <el-form-item label="*学院：" prop="major">
          <el-col :span="8">
            {{this.major}}
          </el-col>
        </el-form-item>
        <el-form-item label="*班级：" prop="classroom">
          <el-col :span="8">
            {{this.classroom}}
          </el-col>
        </el-form-item>
        <el-form-item label="*性别：" prop="sex">
          <el-col :span="8">
            {{this.sex}}
          </el-col>
        </el-form-item>
        <el-form-item label="*终端：" prop="mac">
          <el-col :span="8">
            {{this.mac}}
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-col :span="8">
            <el-button type="primary" @click="back">返回</el-button>
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
                mac:'',
                sex:'',
            }
        },

        mounted(){
            let str=localStorage.getItem("row")
            let jsonObj=JSON.parse(str)
            this.id=jsonObj.studentId
            this.name=jsonObj.studentName
            this.major=jsonObj.major
            this.classroom=jsonObj.classroom
            this.sex=jsonObj.sex
            this.mac=jsonObj.mac
        },

        methods: {
            goBack(){
                this.$router.push({path:'/manage/StudentInfo'});
            },
            back(){
                this.$router.push({path:'/manage/StudentInfo'})
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

