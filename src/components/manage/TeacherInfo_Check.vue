<template>
  <div class="table_box">

    <div class="title">
      教师信息管理>教师信息详情
    </div>

    <el-card>
      <el-form label-width="auto">
        <el-form-item label="*工号：" prop="id">
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
            }
        },

        mounted(){
        },

        methods: {
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

