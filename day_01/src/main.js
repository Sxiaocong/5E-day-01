import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import axios from "axios";
Vue.prototype.$axios = axios;
Vue.directive('back', {
  bind(el, binding) {
    el.style.background = binding.value
  },
  update(el, binding) {
    el.style.background = binding.value
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
