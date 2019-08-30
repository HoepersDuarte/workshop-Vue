import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap-css-only/css/bootstrap.min.css'
import Avatar from '@/components/Avatar' // Importação do componente


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.component('Avatar', Avatar) // Registrando o componente de maneira global
