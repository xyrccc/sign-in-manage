import Vue from 'vue'
import Router from 'vue-router'
// /**
//  * 重写路由的push方法
//  */
// const routerPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error=> error)
// }
import Main from "../components/Mian";
import TheLogin from "../components/views/TheLogin";
import Course from "../components/manage/Course";
import Device from "../components/manage/Device";
import SignIn from "../components/manage/SignIn";
import StudentInfo from "../components/manage/StudentInfo";
import TeacherInfo from "../components/manage/TeacherInfo";
import SignIn_Check from "../components/manage/SignIn_Check";

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children:[
        {
          path: '/manage/Course',
          name: 'Course',
          component: Course,
        },
        {
          path: '/manage/Device',
          name: 'Device',
          component: Device,
        },
        {
          path: '/manage/SignIn',
          name: 'SignIn',
          component: SignIn,
        },
        {
          path: '/manage/StudentInfo',
          name: 'StudentInfo',
          component: StudentInfo,
        },
        {
          path: '/manage/TeacherInfo',
          name: 'TeacherInfo',
          component: TeacherInfo,
        },
        {
          path: '/manage/SignIn_Check',
          name: 'SignIn_Check',
          component: SignIn_Check,
        },
      ]
    }
  ]
})
