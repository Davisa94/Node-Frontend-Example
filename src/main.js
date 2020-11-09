import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ddForm from 'vue-dd-form';

Vue.config.productionTip = false
Vue.component('dd-form', ddForm); 
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
