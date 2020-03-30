<template>
  <div class="table_box">

    <div class="title">
      签到管理>签到详情
    </div>

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
        <el-table-column  prop="id" label="学号"  ></el-table-column>
        <el-table-column  prop="id" label="姓名"  ></el-table-column>
        <el-table-column  prop="id" label="学院"  ></el-table-column>
        <el-table-column  prop="id" label="班级"></el-table-column>
        <el-table-column  prop="id" label="性别"></el-table-column>
        <el-table-column  prop="id" label="签到时间"></el-table-column>
        <el-table-column  prop="id" label="签退时间"></el-table-column>
        <el-table-column  prop="id" label="签到情况"></el-table-column>
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
                    date: '',
                    time: '',
                    course:'',
                    teacher:'',
                    room:''
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
                console.log('reset!');
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
                console.log('!');
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
