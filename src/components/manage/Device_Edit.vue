<template>
  <div class="table_box">

    <div class="title">
      <el-button type="text" class="title" size="mini" @click="goBack">设备管理>编辑设备</el-button>
    </div>
<!--    <div class="title">-->
<!--      设备管理>编辑设备-->
<!--    </div>-->

    <el-card>
      <el-form label-width="auto">
        <el-form-item label="*设备ID：" prop="id">
          <el-col :span="8">
            <el-input v-model="id" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="设备KEY：" prop="key">
          <el-col :span="8">
            <el-input v-model="key" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="设备所在教室：" prop="room">
          <el-col :span="8">
            <el-input v-model="room" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-col :span="8">
            <el-button type="primary" @click="confirm">确定</el-button>
            <el-button type="primary" @click="cancel">取消</el-button>
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
                key:'',
                room:'',
                radio:'1'

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
                    .post('/api/editDevice',{
                        params:{
                            index:localStorage.getItem("deviceId"),
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
                            this.$alert("编辑成功");
                            this.$router.push({path:'/manage/Device'});
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
  .el-form-item{
    text-align: left;
  }
</style>

