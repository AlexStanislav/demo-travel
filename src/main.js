import Vue from 'vue'
import App from './App.vue'
import EventBus from './assets/js/EventBus'
import router from './router'
import store from './store'

window.EventBus = new EventBus()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
