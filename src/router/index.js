import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import C1 from '@/views/C1'
import C2 from '@/views/C2'
import C3 from '@/views/C3'
import C4 from '@/views/C4'
import C5 from '@/views/C5'
import C6 from '@/views/C6'
import C7 from '@/views/C7'
import C8 from '@/views/C8'
import C9 from '@/views/C9'
import C10 from '@/views/C10'
import C11 from '@/views/C11'
import C12 from '@/views/C12'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/C1',
      name: 'vueCodeDemo',
      component: C1
    },
    {
      path: '/C2',
      name: 'vueCodeDemo',
      component: C2
    },
    {
      path: '/C3',
      name: 'vueCodeDemo',
      component: C3
    },
    {
      path: '/C4',
      name: 'vueCodeDemo',
      component: C4
    },
    {
      path: '/C5',
      name: 'vueCodeDemo',
      component: C5
    },
    {
      path: '/C6',
      name: 'vueCodeDemo',
      component: C6
    },
    {
      path: '/C7',
      name: 'vueCodeDemo',
      component: C7
    },
    {
      path: '/C8',
      name: 'vueCodeDemo',
      component: C8
    },
    {
      path: '/C9',
      name: 'vueCodeDemo',
      component: C9
    },
    {
      path: '/C10',
      name: 'vueCodeDemo',
      component: C10
    },
    {
      path: '/C11',
      name: 'vueCodeDemo',
      component: C11
    },
    {
      path: '/C12',
      name: 'vueCodeDemo',
      component: C12
    }
  ]
})
