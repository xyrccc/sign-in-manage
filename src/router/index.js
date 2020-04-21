import Vue from 'vue'
import Router from 'vue-router'

import Main from "../components/Mian";
import TheLogin from "../components/views/TheLogin";
import Course from "../components/manage/Course";
import Device from "../components/manage/Device";
import SignIn from "../components/manage/SignIn";
import StudentInfo from "../components/manage/StudentInfo";
import TeacherInfo from "../components/manage/TeacherInfo";
import SignIn_Check from "../components/manage/SignIn_Check";
import Course_Check from "../components/manage/Course_Check";
import Course_Check_Check from "../components/manage/Course_Check_Check";
import Course_Add from "../components/manage/Course_Add";
import Admin from "../components/manage/Admin";
import StudentInfo_Edit from "../components/manage/StudentInfo_Edit";
import TeacherInfo_Edit from "../components/manage/TeacherInfo_Edit";
import Device_Edit from "../components/manage/Device_Edit";
import Device_Log from "../components/manage/Device_Log";
import StudentInfo_Add from "../components/manage/StudentInfo_Add";
import TeacherInfo_Add from "../components/manage/TeacherInfo_Add";
import Device_Add from "../components/manage/Device_Add";
import Admin_Password from "../components/manage/Admin_Password";
import Course_Edit from "../components/manage/Course_Edit";
import Course_Check_Check_Edit from "../components/manage/Course_Check_Check_Edit";
import Course_Check_Edit from "../components/manage/Course_Check_Edit";
import StudentInfo_Check from "../components/manage/StudentInfo_Check";
import TeacherInfo_Check from "../components/manage/TeacherInfo_Check";
import ForgetPassword from "../components/views/ForgetPassword";

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'TheLogin',
      component: TheLogin,
    },
    {
      path: '/ForgetPassword',
      name: 'ForgetPassword',
      component: ForgetPassword,
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main,
      children:[
        {
          path: '/manage/Admin',
          name: 'Admin',
          component: Admin,
        },
        {
          path: '/manage/Admin_Password',
          name: 'Admin_Password',
          component: Admin_Password,
        },
        {
          path: '/manage/Course',
          name: 'Course',
          component: Course,
        },
        {
          path: '/manage/Course_Check',
          name: 'Course_Check',
          component: Course_Check,
        },
        {
          path: '/manage/Course_Edit',
          name: 'Course_Edit',
          component: Course_Edit,
        },
        {
          path: '/manage/Course_Check_Check',
          name: 'Course_Check_Check',
          component: Course_Check_Check,
        },
        {
          path: '/manage/Course_Check_Edit',
          name: 'Course_Check_Edit',
          component: Course_Check_Edit,
        },
        {
          path: '/manage/Course_Check_Check_Edit',
          name: 'Course_Check_Check_Edit',
          component: Course_Check_Check_Edit,
        },
        {
          path: '/manage/Course_Add',
          name: 'Course_Add',
          component: Course_Add,
        },
        {
          path: '/manage/Device',
          name: 'Device',
          component: Device,
        },
        {
          path: '/manage/Device_Edit',
          name: 'Device_Edit',
          component: Device_Edit,
        },
        {
          path: '/manage/Device_Log',
          name: 'Device_Log',
          component: Device_Log,
        },
        {
          path: '/manage/Device_Add',
          name: 'Device_Add',
          component: Device_Add,
        },
        {
          path: '/manage/SignIn',
          name: 'SignIn',
          component: SignIn,
        },
        {
          path: '/manage/SignIn_Check',
          name: 'SignIn_Check',
          component: SignIn_Check,
        },
        {
          path: '/manage/StudentInfo',
          name: 'StudentInfo',
          component: StudentInfo,
        },
        {
          path: '/manage/StudentInfo_Check',
          name: 'StudentInfo_Check',
          component: StudentInfo_Check,
        },
        {
          path: '/manage/StudentInfo_Edit',
          name: 'StudentInfo_Edit',
          component: StudentInfo_Edit,
        },
        {
          path: '/manage/StudentInfo_Add',
          name: 'StudentInfo_Add',
          component: StudentInfo_Add,
        },
        {
          path: '/manage/TeacherInfo',
          name: 'TeacherInfo',
          component: TeacherInfo,
        },
        {
          path: '/manage/TeacherInfo_Check',
          name: 'TeacherInfo_Check',
          component: TeacherInfo_Check,
        },
        {
          path: '/manage/TeacherInfo_Edit',
          name: 'TeacherInfo_Edit',
          component: TeacherInfo_Edit,
        },
        {
          path: '/manage/TeacherInfo_Add',
          name: 'TeacherInfo_Add',
          component: TeacherInfo_Add,
        },
      ]
    }
  ]
})
