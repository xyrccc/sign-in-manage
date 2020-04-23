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
                this.$router.push({path:'/manage/Device'})
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

