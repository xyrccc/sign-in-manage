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
            {{this.id}}
          </el-col>
        </el-form-item>
        <el-form-item label="*学院：" prop="major">
          <el-col :span="8">
            {{this.id}}
          </el-col>
        </el-form-item>
        <el-form-item label="*班级：" prop="class">
          <el-col :span="8">
            {{this.id}}
          </el-col>
        </el-form-item>
        <el-form-item label="*性别：" prop="sex">
          <el-col :span="8">
            {{this.id}}
          </el-col>
        </el-form-item>
        <el-form-item label="*终端：" prop="device">
          <el-col :span="8">
            {{this.id}}
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
                id:'000',
                name:'',
                major:'',
                class:'',
                device:'',
                radio:'1'
            }
        },

        mounted(){
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

