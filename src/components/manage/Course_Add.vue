<template>
  <div class="table_box">

    <div class="title">
      <el-button type="text" class="title" size="mini" @click="goBack">课程管理>新增课程</el-button>
    </div>
<!--      <div class="title">-->
<!--        课程管理>新增课程-->
<!--      </div>-->

    <el-card>
      <el-form label-width="auto">
        <el-form-item label="*课程ID：" prop="id">
          <el-col :span="8">
            <el-input v-model="id" placeholder="请输入课程Id"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*课程名称：" prop="name">
          <el-col :span="8">
            <el-input v-model="name" placeholder="请输入课程名称"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*课程时间：" prop="time">
          <el-col :span="5">
            <el-select v-model="value1" placeholder="请选择时间（周一～周五）">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="8">
            <el-time-picker
              is-range
              v-model="value3"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              placeholder="选择时间范围">
            </el-time-picker>
          </el-col>
          <el-col :span="2">
            <el-button type="text" icon="el-icon-circle-plus-outline"></el-button>
          </el-col>
        </el-form-item>
        <el-form-item label="*所在教室：" prop="room">
          <el-col :span="8">
            <el-input v-model="room" placeholder="请输入课程所在教室"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="*任课教师：" prop="teacher">
          <el-col :span="8">
            <el-select v-model="value2" placeholder="请选择课程任课老师">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value2">
              </el-option>
            </el-select>          </el-col>
        </el-form-item>
        <el-form-item label="*选课学生：" prop="studentIds">
          <el-col :span="24">
            <el-input v-model="studentIds" placeholder="请输入学号（逗号隔开，例：10001，10002，10003）"></el-input>
            <!--            &lt;!&ndash;表格&ndash;&gt;-->
<!--            <el-table-->
<!--              ref="multipleTable"-->
<!--              :data="handleList"-->
<!--              tooltip-effect="dark"-->
<!--              style="width: 100%"-->
<!--              @selection-change="handleSelectionChange">-->
<!--              <el-table-column-->
<!--                type="selection"-->
<!--                width="55">-->
<!--              </el-table-column>-->
<!--              <el-table-column-->
<!--                type="index"-->
<!--                label="序号">-->
<!--              </el-table-column>-->
<!--              <el-table-column-->
<!--                prop="studentId"-->
<!--                label="学号">-->
<!--                <template slot-scope="scope">{{ scope.row.date }}</template>-->
<!--              </el-table-column>-->
<!--              <el-table-column-->
<!--                prop="StudentName"-->
<!--                label="姓名">-->
<!--              </el-table-column>-->
<!--              <el-table-column-->
<!--                prop="major"-->
<!--                label="学院">-->
<!--              </el-table-column>-->
<!--              <el-table-column-->
<!--                prop="classroom"-->
<!--                label="班级">-->
<!--              </el-table-column>-->
<!--              <el-table-column-->
<!--                prop="sex"-->
<!--                label="性别">-->
<!--              </el-table-column>-->
<!--            </el-table>-->
<!--            &lt;!&ndash;表格&ndash;&gt;-->
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-col :span="8">
            <el-button type="primary" @click="confirm">确定</el-button>
            <el-button type="primary" plain @click="cancel">取消</el-button>
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
                studentIds:'',
                options1: [{
                    value: '周一',
                    label: '周一'
                }, {
                    value: '周二',
                    label: '周二'
                }, {
                    value: '周三',
                    label: '周三'
                }, {
                    value: '周四',
                    label: '周四'
                }, {
                    value: '周五',
                    label: '周五'
                }],
                value1: '',//周几
                value3: '',//时间
                options2: [{
                    value: '选项1',
                    label: '一'
                }, {
                    value: '选项2',
                    label: '二'
                }, {
                    value: '选项3',
                    label: '三'
                }, {
                    value: '选项4',
                    label: '四'
                }, {
                    value: '选项5',
                    label: '五'
                }],
                value2: '',//老师
                handleList:[],
                multipleSelection: []
            }
        },

        mounted(){
            // this.$axios
            //     .get('/api/getStudentInfo')
            //     .then((res) => {
            //         let jsonObj=res.data;
            //         let success=res.success;
            //         let message=res.message;
            //         console.log(jsonObj)
            //         if(success==true){
            //             this.handleList=jsonObj.data;
            //         }
            //         else {
            //             this.$alert(message);
            //         }
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     });
        },

        methods: {
            goBack(){
                this.$router.push({path:'/manage/Course'});
            },
            confirm(){
                let studentIds=this.studentIds.split(',')
                this.$axios
                    .get('/api/addCouese',{
                        params:{
                            courseId:this.id,
                            courseName:this.name,
                            courseData:this.value1,
                            time:this.value,
                            room:this.formInline.room,
                            teacher:this.value2,
                            studentIds:studentIds
                        }
                    })
                    .then((res) => {
                        let jsonObj=res.data;
                        let success=res.success;
                        let message=res.message;
                        console.log(jsonObj)
                        if(success==true){
                            this.$alert("添加成功")
                            this.$router.push({path:'/manage/Course'})
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
                this.$router.push({path:'/manage/Course'})
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        }

    }

</script>

<style scoped>
  .title{
    font-size: large;
    text-align: left;
  }
  .el-col{
   text-align: left;
  }
</style>

