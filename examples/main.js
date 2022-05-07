import Vue from 'vue';
import App from './App.vue';

import './element-ui';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: (h) => h(App)
});
