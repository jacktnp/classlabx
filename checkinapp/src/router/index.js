import Vue from 'vue'
import Router from 'vue-router'
import checkinpage from '@/components/checkinpage'
import success from '@/components/success'
import fail from '@/components/fail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'checkinpage',
      component: checkinpage
    },
    {
      path: '/success/:userid',
      name: 'success',
      component: success,
      props: true
    },
    {
      path: '/fail',
      name: 'fail',
      component: fail
    }
  ]
})
