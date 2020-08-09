<template>
  <div class="table_box">

    <div class="title">
      签到管理
    </div>

    <el-card>
      <el-form :model="formInline">
        <el-col :span="5">
          <el-form-item>
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="请输入日期"
              size="mini">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item>
            <el-select
              v-model="value"
              placeholder="请选择时间段"
              size="mini">
             <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
             </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item>
            <el-input v-model="formInline.room" size="mini" placeholder="教室"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item>
            <el-input v-model="formInline.course" size="mini" placeholder="课程名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item>
            <el-input v-model="formInline.teacher" size="mini" placeholder="任课教师"></el-input>
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
        <el-table-column  prop="courseId" label="课程ID"  ></el-table-column>
        <el-table-column  prop="date" label="日期"  ></el-table-column>
        <el-table-column  prop="time" label="时间段"  ></el-table-column>
        <el-table-column  prop="room" label="教室"></el-table-column>
        <el-table-column  prop="courseName" label="课程名称"></el-table-column>
        <el-table-column  prop="teacher" label="任课老师"></el-table-column>
        <el-table-column  prop="number1" label="应到人数"></el-table-column>
        <el-table-column  prop="number2" label="实到人数"></el-table-column>
        <el-table-column  prop="signInState" label="签到情况"></el-table-column>
        <el-table-column fixed="right" label="操作" align='center'>
          <template slot-scope="scope">
            <el-button type="text" @click="checkInfo(scope.row.courseId)">查看详情</el-button>
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
                value: '',
                value1: '',
                formInline: {
                    course:'',
                    teacher:'',
                    room:''
                },
                options: [{
                    value: '08:00-10:40',
                    label: '08:00-10:40'
                },
                    {
                    value: '14:00-15:40',
                    label: '14:00-15:40'
                }],
                handleList:[],
                currentPage: 1,// 当前页
                pageSize: 5,// 每页多少条
            }
        },

        mounted(){
            this.$axios
                .get('/api/getSign')
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
                    .get('/api/checkSignIn',{
                        params:{
                            data:this.value1,
                            time:this.value,
                            room:this.formInline.room,
                            courseName:this.formInline.course,
                            teacher:this.formInline.teacher
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
                this.formInline.room='';
                this.formInline.course='';
                this.formInline.teacher='';
                this.value='';
                this.value1='';
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
            checkInfo(courseId){
                localStorage.setItem("courseId",courseId);
                this.$router.push({path:'/manage/SignIn_Check'});
            }
        }

    }

</script>

<style scoped>
  .title{
    font-size: large;
    text-align: left;
  }
</style>
