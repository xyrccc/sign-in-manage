<template>
  <div class="table_box">

    <div class="title">
      <el-button type="text" class="title" size="mini" @click="goBack">教师信息管理>编辑教师</el-button>
    </div>
<!--    <div class="title">-->
<!--      教师信息管理>编辑教师-->
<!--    </div>-->

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
                email:'',
                telephone:'',
                radio:'1',
                sex:'',
            }
        },

        mounted(){
        },

        methods: {
            goBack(){
                this.$router.push({path:'/manage/TeacherInfo'});
            },
            confirm(){
                if(this.radio==1){
                    this.sex='男'
                }
                else{
                    this.sex='女'
                }
                this.$axios
                    .post('/api/editTeacherInfo',{
                        params:{
                            index:localStorage.getItem("teacherId"),
                            teacherId:this.id,
                            teacherName:this.name,
                            major:this.major,
                            email:this.email,
                            sex:this.sex,
                            telephone:this.telephone
                        }
                    })
                    .then((res) => {
                        let jsonObj=res.data;
                        let success=res.success;
                        let message=res.message;
                        console.log(jsonObj)
                        if(success==true){
                            this.$alert("编辑成功");
                            this.$router.push({path:'/manage/TeacherInfo'})
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

