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
import Jyjc from '@/components/jyjc/jyjc';



import AdminLogin from '@/components/admin/adminLogin';
import AdminIndex from '@/components/admin/adminIndex';
import questionList from '@/components/admin/questionList';
import questionDa from '@/components/admin/question';
import AdminData from '@/components/admin/adminData';
import adminUser from '@/components/admin/adminUser';
import AdminUserScreening from '@/components/admin/adminUser_screening';
import AdminUserInjection from '@/components/admin/adminUser_injection';
import AdminUserVaccine from '@/components/admin/adminUser_vaccine';
import AdminUserVaccineInjectionA from '@/components/admin/adminUser_vaccine_injectionA';
import AdminUserVaccineInjectionB from '@/components/admin/adminUser_vaccine_injectionB';
import AdminUserVaccineInjectionC from '@/components/admin/adminUser_vaccine_injectionC';
import AdminTeamList from '@/components/admin/adminTeamList';
import AdminTeamListEdit from '@/components/admin/adminTeamListEdit';
import AdminList from '@/components/admin/adminList';
import AdminNew from '@/components/admin/adminNew';
import BankList from '@/components/admin/bankList';
import BankNew from '@/components/admin/bankNew';
import AdminDataDati from '@/components/admin/adminDataDati';
import adminDataDati2 from '@/components/admin/adminDataDati2';

Vue.use(Router);
Vue.use(iView);

export default new Router({
  routes: [
    {
      path: '/none',
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
      path: '/jyjc',
      name: 'jyjc',
      component: Jyjc,
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


    {
      path: '/adminLogin',
      name: 'adminLogin',
      component: AdminLogin,
    },
    {
      path: '/adminIndex',
      name: 'adminIndex',
      component: AdminIndex,
      children: [
        {
          path: 'questionList',
          name: 'questionList',
          component: questionList,
        },
        {
          path: 'questionDa/:id',
          name: 'questionDa',
          component: questionDa,
        },
        {
          path: 'adminData',
          name: 'adminData',
          component: AdminData,
        },
        {
          path: 'adminUser',
          name: 'adminUser',
          component: adminUser,
        },
        {
          path: 'adminUser_screening',
          component: AdminUserScreening,
        },
        {
          path: 'adminUser_injection',
          component: AdminUserInjection,
        },
        {
          path: 'adminUser_vaccine',
          component: AdminUserVaccine,
        },
        {
          path: 'adminUser_vaccine_injectionA',
          component: AdminUserVaccineInjectionA,
        },
        {
          path: 'adminUser_vaccine_injectionB',
          component: AdminUserVaccineInjectionB,
        },
        {
          path: 'adminUser_vaccine_injectionC',
          component: AdminUserVaccineInjectionC,
        },
        {
          path: 'adminTeamList',
          component: AdminTeamList,
        },
        {
          path: 'adminTeamListEdit',
          name: 'adminTeamListEdit',
          component: AdminTeamListEdit,
        },
        {
          path: 'adminTeamNew',
          name: 'adminTeamNew',
          component: AdminTeamListEdit,
        },
        {
          path: 'adminList',
          name: 'adminList',
          component: AdminList,
        },
        {
          path: 'adminNew',
          name: 'adminNew',
          component: AdminNew,
        },
        {
          path: 'bankList',
          name: 'bankList',
          component: BankList,
        },
        {
          path: 'bankNew',
          name: 'bankNew',
          component: BankNew,
        },
        {
          path: 'adminDataDati',
          name: 'adminDataDati',
          component: AdminDataDati,
        },
        {
          path: 'adminDataDati2',
          name: 'adminDataDati2',
          component: adminDataDati2,
        },
      ],
    },

  ],
});
