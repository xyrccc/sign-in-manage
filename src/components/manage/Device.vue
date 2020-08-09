<template>
  <div class="table_box">

    <el-col :span="12">
      <div class="title">
        设备管理
      </div>
    </el-col>
    <el-col :span="12">
      <div class="add">
        <el-button type="primary" size="mini" @click="collectLog1">采集日志</el-button>
        <el-button type="primary" size="mini" @click="addDevice">+新增设备</el-button>
      </div>
    </el-col>

    <el-card>
      <el-form :model="formInline" label-width="auto">
        <el-col :span="4">
          <el-form-item>
            <el-input v-model="formInline.id" size="mini" placeholder="设备ID"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item>
            <el-input v-model="formInline.state" size="mini" placeholder="设备状态"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item>
            <el-input v-model="formInline.room" size="mini" placeholder="设备所在教室"></el-input>
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
        <el-table-column  prop="deviceId" label="设备ID"  ></el-table-column>
        <el-table-column  prop="key" label="设备KEY"  ></el-table-column>
        <el-table-column  prop="state" label="设备状态"  ></el-table-column>
        <el-table-column  prop="room" label="设备所在教室"></el-table-column>
        <el-table-column  prop="number" label="今日采集条数"></el-table-column>
        <el-table-column  prop="count" label="累计采集条数"></el-table-column>
        <el-table-column fixed="right" label="操作" align='center' width="180">
          <template slot-scope="scope">
<!--            <el-button-group>-->
            <el-button type="text" @click="collectLog2(scope.row.deviceId)">采集日志</el-button>
            <el-button type="text" @click="editInfo(scope.row.deviceId)">编辑</el-button>
            <el-button type="text" @click="deleteInfo(scope.row.deviceId)">删除</el-button>
<!--            </el-button-group>-->
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
                    state: '',
                    room:''
                },
                handleList: [],
                currentPage: 1,// 当前页
                pageSize: 5,// 每页多少条
            }
        },

        mounted(){
            this.$axios
                .get('/api/getDevice')
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
                    .get('/api/checkDevice',{
                        params:{
                            deviceId:this.formInline.id,
                            state:this.formInline.state,
                            room:this.formInline.room
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
                this.formInline.state='';
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
            editInfo(deviceId){
                localStorage.setItem("courseId",deviceId);
                this.$router.push({path:'/manage/Device_Edit'})
            },
            deleteInfo(deviceId){
                this.$axios
                    .post('/api/data/deleteDevice',{
                        params:{
                            courseId:deviceId
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
            collectLog2(deviceId){
                localStorage.setItem("courseId",deviceId);
                this.$router.push({path:'/manage/Device_Log'})
            },
            addDevice(){
                this.$router.push({path:'/manage/Device_Add'})
            },
            collectLog1(){
                localStorage.setItem("courseId",'');
                this.$router.push({path:'/manage/Device_Log'})
            },
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
