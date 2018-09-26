import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import SignUp from '@/components/SignUp'
import Jobs from '@/components/Jobs'
// import axios from 'axios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path:'/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path:'/jobs',
      name: 'Jobs',
      component: Jobs
    }
  ]
})
