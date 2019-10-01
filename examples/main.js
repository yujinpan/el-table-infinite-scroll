import Vue from 'vue';
import App from './App.vue';
import Element from 'element-ui';

Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: (h) => h(App)
});
