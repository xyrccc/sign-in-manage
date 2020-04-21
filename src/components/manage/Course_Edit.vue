<template>
  <div class="table_box">

    <div class="title">
      课程管理>编辑课程
    </div>

    <el-card>
      <el-form label-width="auto">
        <el-form-item label="*课程ID：" prop="id">
          <el-col :span="8">
            <el-input v-model="id" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*课程时间：" prop="time">
          <el-col :span="8">
            <el-input v-model="time" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*教室：" prop="room">
          <el-col :span="8">
            <el-input v-model="room" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*课程名称：" prop="name">
          <el-col :span="8">
            <el-input v-model="name" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*任课教师：" prop="teacher">
          <el-col :span="8">
            <el-input v-model="teacher" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*选课人数：" prop="number">
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
            confirm(){
                this.$router.push({path:'/manage/Course'})
            },
            cancel(){
                this.$router.push({path:'/manage/Course'})
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

