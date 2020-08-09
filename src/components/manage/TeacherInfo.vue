<template>
  <div class="table_box">

    <el-col :span="12">
      <div class="title">
        教师信息管理
      </div>
    </el-col>
    <el-col :span="12">
      <div class="add">
        <el-button type="primary" size="mini" @click="addTeacher">+新增教师</el-button>
      </div>
    </el-col>

    <el-card>
      <el-form :model="formInline" label-width="auto">
        <el-col :span="3">
          <el-form-item>
            <el-input v-model="formInline.id" size="mini" placeholder="工号"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item>
            <el-input v-model="formInline.name" size="mini" placeholder="姓名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item>
            <el-input v-model="formInline.major" size="mini" placeholder="学院"></el-input>
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
        <el-table-column  prop="teacherId" label="工号"  ></el-table-column>
        <el-table-column  prop="teacherName" label="姓名"  ></el-table-column>
        <el-table-column  prop="major" label="学院"  ></el-table-column>
        <el-table-column  prop="sex" label="性别"></el-table-column>
        <el-table-column  prop="email" label="邮箱"></el-table-column>
        <el-table-column  prop="telephone" label="联系方式"></el-table-column>
        <el-table-column fixed="right" label="操作" align='center'>
          <template slot-scope="scope">
            <el-button type="text" @click="checkInfo(scope.row)">查看</el-button>
            <el-button type="text" @click="editInfo(scope.row.teacherId)">编辑</el-button>
            <el-button type="text" @click="deleteInfo(scope.row.teacherId)">删除</el-button>
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
                formInline: {
                    id: '',
                    name: '',
                    major:'',
                },
                handleList: [],
                currentPage: 1,// 当前页
                pageSize: 5,// 每页多少条
            }
        },

        mounted(){
            this.$axios
                .get('/api/getTeacherInfo')
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
            check() {
                this.$axios
                    .get('/api/checkTeacherInfo',{
                        params:{
                            teacherId:this.formInline.id,
                            teacherName:this.formInline.name,
                            major:this.formInline.major,
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
                this.formInline.id='';
                this.formInline.name='';
                this.formInline.major='';
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
            checkInfo(row){
                localStorage.setItem("row",JSON.stringify(row));
                this.$router.push({path:'/manage/TeacherInfo_Check'})
            },
            editInfo(teacherId){
                localStorage.setItem("teacherId",teacherId);
                this.$router.push({path:'/manage/TeacherInfo_Edit'})
            },
            deleteInfo(teacherId){
                this.$axios
                    .post('/api/data/deleteteacherInfo',{
                        params:{
                            teacherId:teacherId
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
                    });                        },
            addTeacher(){
                this.$router.push({path:'/manage/TeacherInfo_Add'})
            }
        }

    }

</script>

<style scoped>
  .title{
    font-size: large;
    text-align: left;
  }
  .add{
    text-align: right;
  }
</style>
