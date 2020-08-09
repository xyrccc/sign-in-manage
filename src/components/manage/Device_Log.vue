<template>
  <div class="table_box">

    <div class="title">
      <el-button type="text" class="title" size="mini" @click="goBack">设备管理>收集日志</el-button>
    </div>
<!--      <div class="title">-->
<!--        设备管理>收集日志-->
<!--      </div>-->

    <el-card>
<!--      <el-form :model="formInline">-->
<!--        <el-col :span="4">-->
<!--          <el-form-item>-->
<!--            <el-input v-model="formInline.id" size="mini" placeholder="设备ID"></el-input>-->
<!--          </el-form-item>-->
<!--        </el-col>-->
<!--        <el-col :span="4">-->
<!--          <el-form-item>-->
<!--            <el-input v-model="formInline.mac" size="mini" placeholder="终端MAC"></el-input>-->
<!--          </el-form-item>-->
<!--        </el-col>-->
<!--        <el-col :span="10">-->
<!--          <el-date-picker-->
<!--            size="mini"-->
<!--            v-model="formInline.time"-->
<!--            type="datetimerange"-->
<!--            range-separator="至"-->
<!--            start-placeholder="开始日期"-->
<!--            end-placeholder="结束日期">-->
<!--          </el-date-picker>-->
<!--        </el-col>-->
<!--        <el-col :span="4">-->
<!--          <el-form-item>-->
<!--            <el-button-group>-->
<!--              <el-button type="primary" size="mini" @click="check">查询</el-button>-->
<!--              <el-button type="primary" size="mini" @click="reset">重置</el-button>-->
<!--            </el-button-group>-->
<!--          </el-form-item>-->
<!--        </el-col>-->
<!--      </el-form>-->
      <el-form :model="formInline">
        <el-col :span="4">
          <el-form-item>
            <el-input v-model="formInline.id" size="mini" placeholder="设备ID"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item>
            <el-input v-model="formInline.mac" size="mini" placeholder="终端MAC"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item>
            <el-date-picker
              v-model="formInline.time"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              size="mini">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="4">
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
        <el-table-column  prop="mac" label="终端MAC"  ></el-table-column>
        <el-table-column  prop="loutingId" label="路由MAC"  ></el-table-column>
        <el-table-column  prop="loutingName" label="路由名称"></el-table-column>
        <el-table-column  prop="distance" label="参考距离"></el-table-column>
        <el-table-column  prop="link" label="是否连接"></el-table-column>
        <el-table-column  prop="time" label="采集时间"></el-table-column>
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
                    time:'',
                    mac:'',
                },
                handleList: [],
                currentPage: 1,// 当前页
                pageSize: 5,// 每页多少条
            }
        },

        mounted(){
            this.$axios
                .get('/api/getLog',{
                    params:{
                        deviceId:localStorage.getItem("deviceId")
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
                this.$router.push({path:'/manage/Device'});
            },
            check() {
                this.$axios
                    .get('/api/checkLog',{
                        params:{
                            deviceId:this.formInline.id,
                            time:this.formInline.time,
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
                this.formInline.time='';
                this.formInline.id='';
                this.formInline.mac='';
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
