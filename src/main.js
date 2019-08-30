import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap-css-only/css/bootstrap.min.css'
import Avatar from '@/components/Avatar' // Importação do componente
import firebase from 'firebase' // Importa o firebase instalado com npm
import config from './config' // Importa o objeto de configuração

Vue.config.productionTip = false

Vue.component('Avatar', Avatar) // Registrando o componente de maneira global

firebase.initializeApp(config) // Inicializa o firebase com a configuração definida no arquivo
window.firebase = firebase

firebase.auth().onAuthStateChanged(user => { // Verifica se o Usuário está logado
  store.dispatch('setCurrentUser', user) // Adiciona o usuário logado na store
  /* eslint-disable no-new */
  // Renderiza a aplicação
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
