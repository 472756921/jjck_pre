import Vue from 'vue';
import VueResource from 'vue-resource';
import axios from 'axios';
import App from './App';
import router from './router';

Vue.use(VueResource);
Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
