import Vue from 'vue';
import VueRouter from 'vue-router';
import test from '../views/testFirst.vue';
import test1 from '../views/testSecond.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes:[
    {
        //  path : url 주소
        path: '/test',
        // component: url 주소로 갔을 때 표시될 컴포넌트
        component: test,
    },
    {
      path: '/test1',
      component: test1,
    }
  ]
});