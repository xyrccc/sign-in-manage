<template>
  <div class="table_box">

    <div class="title">
      <el-button type="text" class="title" size="mini" @click="goBack">签到管理>签到详情</el-button>
    </div>
<!--    <div class="title">-->
<!--      签到管理>签到详情-->
<!--    </div>-->

    <el-card>
      <el-form :model="formInline" label-width="auto">
        <el-col :span="4">
          <el-form-item label="学号：">
            <el-input v-model="formInline.id" size="mini"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="姓名：">
            <el-input v-model="formInline.name" size="mini"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="签到情况：">
            <el-input v-model="formInline.info" size="mini"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item>
            <el-button-group>
              <el-button type="primary" size="mini" @click="check">查询</el-button>
              <el-button type="primary" size="mini" @click="reset">重置</el-button>
            </el-button-group>
          </el-form-item>
        </el-col>
      </el-form>

      <el-table ref="multipleTable" :data="handleList.slice((currentPage-1)*pageSize,currentPage*pageSize)" tooltip-effect="dark" style="width: 100%">
        <el-table-column  type="index" label="序号" width="100"></el-table-column>
        <el-table-column  prop="studentId" label="学号"  ></el-table-column>
        <el-table-column  prop="studentName" label="姓名"  ></el-table-column>
        <el-table-column  prop="major" label="学院"  ></el-table-column>
        <el-table-column  prop="classroom" label="班级"></el-table-column>
        <el-table-column  prop="sex" label="性别"></el-table-column>
        <el-table-column  prop="signInTime" label="签到时间"></el-table-column>
        <el-table-column  prop="signOutTime" label="签退时间"></el-table-column>
        <el-table-column  prop="signInState" label="签到情况"></el-table-column>
      </el-table>

      <div style="margin-top:20px">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5,15, 25,50]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="handleList.length">
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                formInline: {
                    id: '',
                    neme: '',
                    info:'',
                },
                handleList: [],
                currentPage: 1,// 当前页
                pageSize: 5,// 每页多少条
            }
        },

        mounted(){
            this.$axios
                .get('/api/getSignInfo',{
                    params:{
                        courseId:localStorage.getItem("courseId")
                    }
                })
                .then((res) => {
                    let jsonObj=res.data;
                    let success=res.success;
                    let message=res.message;
                    console.log(jsonObj)
                    if(success==true){
                        this.handleList=jsonObj.data;
                    }
                    else {
                        this.$alert(message);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        },

        methods: {
            goBack(){
                this.$router.push({path:'/manage/SignIn'});
            },
            check() {
                this.$axios
                    .get('/api/checkSignInInfo',{
                        params:{
                            stydentId:this.formInline.id,
                            stydentName:this.formInline.name,
                            signInState:this.formInline.info
                        }
                    })
                    .then((res) => {
                        let jsonObj=res.data;
                        let success=res.success;
                        let message=res.message;
                        console.log(jsonObj)
                        if(success==true){
                            this.handleList=jsonObj.data;
                        }
                        else {
                            this.$alert(message);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            reset() {
                this.id='';
                this.name='';
                this.info='';
            },
            // 每页多少条
            handleSizeChange(val) {
                this.pageSize = val;
                this.currentPage = 1;
            },
            // 当前页
            handleCurrentChange(val) {
                this.currentPage = val;
            },
        }

    }

</script>

<style scoped>
  .title{
    font-size: large;
    text-align: left;
  }
</style>
