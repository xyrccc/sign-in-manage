<template>
  <div class="table_box">

    <div class="title">
      <el-button type="text" class="title" size="mini" @click="goBack">设备管理>新增设备</el-button>
    </div>
<!--    <div class="title">-->
<!--      设备管理>新增设备-->
<!--    </div>-->

    <el-card>
      <el-form>
        <el-form-item>
          <div class="title1">
            单个新增
          </div>
          <el-col :span="4">
            <el-input v-model="id" placeholder="请输入设备ID"></el-input>
          </el-col>
          <el-col :span="4">
            <el-input v-model="key" placeholder="请输入设备KEY"></el-input>
          </el-col>
          <el-col :span="4">
            <el-input v-model="room" placeholder="请输入设备所在教室"></el-input>
          </el-col>
          <el-col :span="12">
            <el-button type="text" icon="el-icon-circle-plus-outline"></el-button>
          </el-col>
          <div class="title2">
            *注：所有项均为必填项
          </div>
          <el-col :span="2">
            <div class="title1">
              批量上传
            </div>
          </el-col>
          <el-col :span="2">
            <el-button type="text">导入</el-button>
          </el-col>
        </el-form-item>

        <el-form-item>
          <div class="title3">
            一、上传文件说明
            <br>
            1、仅支持*xlsh或xlsxw文件格式di第一行表头不可修改；
            <br>
            2、所有项均为必填项。
            <br>
            3、文件大小5M以内，最多可上传100条。
            <br>
            二、文件按照格式如下：
            <el-button type="text">点击下载模版</el-button>
            <br>
            <img class="studentAdd" src="../../../static/images/deviceAdd.png" ></img>
          </div>
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
                room:'',
                key:'',
            }
        },

        mounted(){
        },

        methods: {
            goBack(){
                this.$router.push({path:'/manage/Device'});
            },
            confirm(){
                this.$axios
                    .post('/api/addDevice',{
                        params:{
                            deviceId:this.id,
                            key:this.key,
                            room:this.room,
                        }
                    })
                    .then((res) => {
                        let jsonObj=res.data;
                        let success=res.success;
                        let message=res.message;
                        console.log(jsonObj)
                        if(success==true){
                            this.$alert("添加成功")
                            this.$router.push({path:'/manage/Device'})
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
                this.$router.push({path:'/manage/Device'})
            },
        }

    }

</script>

<style scoped>
  .title{
    font-size: large;
    text-align: left;
  }
  .title1{
    font-size: medium;
    text-align: left;
  }
  .title2{
    font-size: small;
    text-align: left;
    color: red;
  }
  .title3{
    font-size: small;
    text-align: left;
  }
  .el-col{
    text-align: left;
  }
</style>

