<template>
  <div class="table_box">

    <div class="title">
      <el-button type="text" class="title" size="mini" @click="goBack">课程管理>课程详情>学生签到详情</el-button>
    </div>
<!--    <div class="title">-->
<!--      课程管理>课程详情>学生签到详情-->
<!--    </div>-->

    <el-card>

      <div style="text-align: left">
        {{this.studentId}}-{{this.studentName}}
      </div>

      <el-table ref="multipleTable" :data="handleList.slice((currentPage-1)*pageSize,currentPage*pageSize)" tooltip-effect="dark" style="width: 100%">
        <el-table-column  type="index" label="序号" width="100"></el-table-column>
        <el-table-column  prop="courseTime" label="课时"  ></el-table-column>
        <el-table-column  prop="data" label="课程日期"  ></el-table-column>
        <el-table-column  prop="time" label="时间段"  ></el-table-column>
        <el-table-column  prop="signInTime" label="签到时间"></el-table-column>
        <el-table-column  prop="signOutTime" label="签退时间"></el-table-column>
        <el-table-column  prop="signInState" label="签到情况"></el-table-column>
        <el-table-column fixed="right" label="操作" align='center'>
          <template slot-scope="scope">
            <el-button type="text" @click="editInfo(scope.row.courseTime)">编辑</el-button>
          </template>
        </el-table-column>
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
                handleList: [],
                currentPage: 1,// 当前页
                pageSize: 5,// 每页多少条
                studentId:localStorage.getItem("studentId"),
                studentName:localStorage.getItem("studentName"),            }
        },

        mounted(){
            this.$axios
                .get('/api/getStudentSignInInfo',{
                    params:{
                        studentId:localStorage.getItem("studentId"),
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
                this.$router.push({path:'/manage/Course_Check'});
            },
            editInfo(courseTime) {
                localStorage.setItem("courseTime",courseTime)
                this.$router.push({path:'/manage/Course_Check_Check_Edit'})
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

