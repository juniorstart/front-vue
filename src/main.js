import VueCompositionAPI from '@vue/composition-api';
import Vuetify from 'vuetify/lib';
import Vue from 'vue';
import Toast from 'vue-toastification';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import 'vue-toastification/dist/index.css';

Vue.config.productionTip = false;

Vue.use(VueCompositionAPI);
Vue.use(Vuetify);
Vue.use(Toast);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
