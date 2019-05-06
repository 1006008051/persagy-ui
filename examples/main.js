import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Persagy from '../packages/index'
import demoBlock from './components/demo-block.vue'
Vue.component('demo-block', demoBlock)
Vue.use(Persagy)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})