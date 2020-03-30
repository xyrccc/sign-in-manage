<template>
  <div>
    <el-container class="Main">
      <el-header style="width:100vw">
        <h2 class="title">签到管理系统</h2>
      </el-header>
      <el-container>
        <el-aside style="width:10vw">
          <el-menu router :default-active="$route.path">
              <el-menu-item-group>
                <el-menu-item index="/manage/SignIn">签到管理</el-menu-item>
                <el-menu-item index="/manage/Course">课程管理</el-menu-item>
                <el-menu-item index="/manage/StudentInfo">学生信息管理</el-menu-item>
                <el-menu-item index="/manage/TeacherInfo">教师信息管理</el-menu-item>
                <el-menu-item index="/manage/Device">设备管理</el-menu-item>
              </el-menu-item-group>
          </el-menu>
        </el-aside>
        <el-main style="width:90vw">
          <transition>
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
        table:false
    };
  },

  methods: {

  },

  mounted() {
      this.$router.push({name:'SignIn'})
  }
};
</script>
<style scoped>
.Main {
  width: 100vw;
  height: 100vh;
}
.title{
  color: white;
  font-size: large;
}
.el-header {
  background-color: #0F98FF;
  text-align: left;
}
.el-menu-item-group {
  text-align: left;
}
.el-menu-item{
  font-size: medium;
}
.el-main {
  background-color: #dcdfe6;
}
</style>
