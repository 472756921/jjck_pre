import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import Reg from '@/components/user/reg';
import Agreement from '@/components/user/agreement';
import TeamList from '@/components/team/teamList';
import Service from '@/components/user/service';
import Screening from '@/components/user/service_screening';
import Injection from '@/components/user/service_injection';
import Vaccine from '@/components/user/service_vaccine';
import Status from '@/components/user/status';
import UserChange from '@/components/user/userChange';
import AboutUS from '@/components/about/aboutUS';
import ExpertList from '@/components/expert/expertList';
import QuestionNew from '@/components/expert/question';
import UserQuestionList from '@/components/expert/userQuestionList';
import Login from '@/components/expert/login';
import QuestionList from '@/components/expert/questionList';

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
    {
      path: '/service',
      name: 'service',
      component: Service,
    },
    {
      path: '/screening',
      name: 'screening',
      component: Screening,
    },
    {
      path: '/injection',
      name: 'injection',
      component: Injection,
    },
    {
      path: '/vaccine',
      name: 'vaccine',
      component: Vaccine,
    },
    {
      path: '/status',
      name: 'status',
      component: Status,
    },
    {
      path: '/change',
      name: 'userChange',
      component: UserChange,
    },
    {
      path: '/us',
      name: 'aboutUS',
      component: AboutUS,
    },
    {
      path: '/expertList',
      name: 'expertList',
      component: ExpertList,
    },
    {
      path: '/questionNew',
      name: 'questionNew',
      component: QuestionNew,
    },
    {
      path: '/questionAn',
      name: 'questionNew',
      component: QuestionNew,
    },
    {
      path: '/userQuestionList',
      name: 'userQuestionList',
      component: UserQuestionList,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/questionList',
      name: 'questionList',
      component: QuestionList,
    },
  ],
});
