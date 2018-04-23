import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import SVGPathPlugin from '@/plugins/SVGPathPlugin'

Vue.config.productionTip = false
Vue.use(SVGPathPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
