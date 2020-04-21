<template>
  <div class="table_box">

    <div class="title">
      教师信息管理>编辑教师
    </div>

    <el-card>
      <el-form label-width="auto">
        <el-form-item label="*工号：" prop="id">
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
        <el-form-item label="*性别：" prop="sex">
          <el-col :span="8">
            <el-radio v-model="radio" label="1">男</el-radio>
            <el-radio v-model="radio" label="2">女</el-radio>
          </el-col>
        </el-form-item>
        <el-form-item label="*邮箱：" prop="emil">
          <el-col :span="8">
            <el-input v-model="emil" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*联系方式：" prop="telephone">
          <el-col :span="8">
            <el-input v-model="telephone" ></el-input>
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
                emil:'',
                telephone:'',
                radio:'1'

            }
        },

        mounted(){
        },

        methods: {
            confirm(){
                this.$router.push({path:'/manage/TeacherInfo'})
            },
            cancel(){
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

