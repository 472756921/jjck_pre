import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import Reg from '@/components/user/reg';
import Agreement from '@/components/user/agreement';
import TeamList from '@/components/team/teamList';

Vue.use(Router);
Vue.use(iView);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg,
    },
    {
      path: '/agreement',
      name: 'agreement',
      component: Agreement,
    },
    {
      path: '/teamList',
      name: 'teamList',
      component: TeamList,
    },
  ],
});
