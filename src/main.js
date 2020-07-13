import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import VueCompositionAPI from '@vue/composition-api';
import Vuetify from 'vuetify/lib';

Vue.config.productionTip = false;

Vue.use(VueCompositionAPI);
Vue.use(Vuetify);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
