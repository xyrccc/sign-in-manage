<template>
  <div class="table_box">

    <div class="title">
      课程管理>课程详情>课程详情编辑
    </div>

    <el-card>
      <el-form label-width="auto">
        <el-form-item label="*学号：" prop="id">
          <el-col :span="8">
            <el-input v-model="id" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*姓名：" prop="time">
          <el-col :span="8">
            <el-input v-model="time" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*学院：" prop="room">
          <el-col :span="8">
            <el-input v-model="room" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*班级：" prop="name">
          <el-col :span="8">
            <el-input v-model="name" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*性别：" prop="teacher">
          <el-col :span="8">
            <el-radio v-model="radio" label="1">男</el-radio>
            <el-radio v-model="radio" label="2">女</el-radio>
          </el-col>
        </el-form-item>
        <el-form-item label="*正常签到：" prop="number">
          <el-col :span="8">
            <el-input v-model="number" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*迟到/早退：" prop="number">
          <el-col :span="8">
            <el-input v-model="number" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*缺勤次数：" prop="number">
          <el-col :span="8">
            <el-input v-model="number" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*请假次数：" prop="number">
          <el-col :span="8">
            <el-input v-model="number" ></el-input>
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
                room:'',
                teacher:'',
                time:'',
                number:'',
                radio:'1'
            }
        },

        mounted(){
        },

        methods: {
            confirm(){
                this.$router.push({path:'/manage/Course_Check'})
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

