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
        <el-form-item label="*课时：" prop="id">
          <el-col :span="8">
            <el-input v-model="id" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*课程日期：" prop="time">
          <el-col :span="8">
            <el-input v-model="time" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*时间段：" prop="room">
          <el-col :span="8">
            <el-input v-model="room" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*签到时间：" prop="name">
          <el-col :span="8">
            <el-input v-model="name" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*签退时间：" prop="teacher">
          <el-col :span="8">
            <el-input v-model="teacher" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*签到情况：" prop="number">
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
                number:''
            }
        },

        mounted(){
        },

        methods: {
            goBack(){
                this.$router.push({path:'/manage/Course_Check_Check'});
            },
            confirm(){
                this.$router.push({path:'/manage/Course_Check_Check'})
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

