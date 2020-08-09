<template>
  <div class="table_box">

    <div class="title">
      <el-button type="text" class="title" size="mini" @click="goBack">教师信息管理>教师信息详情</el-button>
    </div>
<!--    <div class="title">-->
<!--      教师信息管理>教师信息详情-->
<!--    </div>-->

    <el-card>
      <el-form label-width="auto">
        <el-form-item label="*工号：" prop="id">
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
        <el-form-item label="*性别：" prop="sex">
          <el-col :span="8">
            {{this.sex}}
          </el-col>
        </el-form-item>
        <el-form-item label="*邮箱：" prop="email">
          <el-col :span="8">
            {{this.email}}
          </el-col>
        </el-form-item>
        <el-form-item label="*联系方式：" prop="telephone">
          <el-col :span="8">
            {{this.telephone}}
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
                telephone:'',
                email:'',
                sex:'',
            }
        },

        mounted(){
            let str=localStorage.getItem("row")
            let jsonObj=JSON.parse(str)
            this.id=jsonObj.teahcerId
            this.name=jsonObj.teahcerName
            this.major=jsonObj.major
            this.email=jsonObj.email
            this.sex=jsonObj.sex
            this.telephone=jsonObj.telephone
        },

        methods: {
            goBack(){
                this.$router.push({path:'/manage/TeacherInfo'});
            },
            back(){
                this.$router.push({path:'/manage/TeacherInfo'})
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

