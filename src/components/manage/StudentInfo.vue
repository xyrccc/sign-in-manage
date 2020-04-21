<template>
  <div class="table_box">

    <el-col :span="12">
      <div class="title">
        学生信息管理
      </div>
    </el-col>
    <el-col :span="12">
      <div class="add">
        <el-button type="primary" size="mini" @click="addStudent">+新增学生</el-button>
      </div>
    </el-col>

    <el-card>
      <el-form :model="formInline" label-width="auto">
        <el-col :span="3">
          <el-form-item>
            <el-input v-model="formInline.id" size="mini" placeholder="学号"></el-input>
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
        <el-col :span="3">
          <el-form-item>
            <el-input v-model="formInline.classroom" size="mini" placeholder="班级"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-form-item>
            <el-input v-model="formInline.mac" size="mini" placeholder="终端MAC"></el-input>
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
        <el-table-column  prop="id" label="学号"  ></el-table-column>
        <el-table-column  prop="id" label="姓名"  ></el-table-column>
        <el-table-column  prop="id" label="学院"  ></el-table-column>
        <el-table-column  prop="id" label="班级"></el-table-column>
        <el-table-column  prop="id" label="性别"></el-table-column>
        <el-table-column  prop="id" label="终端MAC"></el-table-column>
        <el-table-column fixed="right" label="操作" align='center'>
          <template slot-scope="scope">
            <el-button type="text" @click="checkInfo">查看</el-button>
            <el-button type="text" @click="editInfo">编辑</el-button>
            <el-button type="text" @click="deleteInfo">删除</el-button>
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
                    sex:'',
                    classroom:''
                },
                handleList: [{id:'0'},{id:'0'},{id:'0'},{id:'0'},{id:'0'},{id:'0'},{id:'0'},{id:'0'},{id:'0'},{id:'0'},{id:'0'},{id:'0'},{id:'0'},{id:'0'},{id:'0'}],
                currentPage: 1,// 当前页
                pageSize: 5,// 每页多少条
            }
        },

        mounted(){
            // this.$axios
            //     .get('/api/data/getBanzhuanDataInfo')
            //     .then((res) => {
            //         let jsonObj=res.data;
            //         console.log(jsonObj)
            //         this.code=jsonObj.code;
            //         this.message=jsonObj.message;
            //         if(this.code==200){
            //             this.data=jsonObj.data;
            //         }
            //         else {
            //             this.$alert(this.message);
            //         }
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     });
        },

        methods: {
            check() {
                console.log('submit!');
            },
            reset() {
                this.formInline.id='';
                this.formInline.name='';
                this.formInline.sex='';
                this.formInline.classroom='';
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
            checkInfo(){
                this.$router.push({path:'/manage/StudentInfo_Check'})
            },
            editInfo(){
                this.$router.push({path:'/manage/StudentInfo_Edit'})
            },
            deleteInfo(){
                console.log('submit!');
            },
            addStudent(){
                this.$router.push({path:'/manage/StudentInfo_Add'})
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
