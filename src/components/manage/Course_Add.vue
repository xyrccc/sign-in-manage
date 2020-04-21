<template>
  <div class="table_box">

      <div class="title">
        课程管理>新增课程
      </div>

    <el-card>
      <el-form label-width="auto">
        <el-form-item label="*课程ID：" prop="id">
          <el-col :span="8">
            <div style="text-align: left">{{this.id}}</div>
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
        <el-form-item label="*所在教室：" prop="classroom">
          <el-col :span="8">
            <el-input v-model="classroom" placeholder="请输入课程所在教室"></el-input>
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
        <el-form-item label="*选课学生：" prop="student">
          <el-col :span="24">
<!--            <el-button type="text" >批量选择</el-button>-->
            <!--表格-->
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange">
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                type="index"
                label="序号">
              </el-table-column>
              <el-table-column
                prop="id"
                label="学号">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名">
              </el-table-column>
              <el-table-column
                prop="major"
                label="学院">
              </el-table-column>
              <el-table-column
                prop="class"
                label="班级">
              </el-table-column>
              <el-table-column
                prop="sex"
                label="性别">
              </el-table-column>
            </el-table>
            <!--表格-->
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
                id:'10001',
                name:'',
                time:'',
                classroom:'',
                teacher:'',
                student:'',
                options1: [{
                    value: '选项1',
                    label: '周一'
                }, {
                    value: '选项2',
                    label: '周二'
                }, {
                    value: '选项3',
                    label: '周三'
                }, {
                    value: '选项4',
                    label: '周四'
                }, {
                    value: '选项5',
                    label: '周五'
                }],
                value1: '',
                value3: [],
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
                value2: '',

                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                multipleSelection: []
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

