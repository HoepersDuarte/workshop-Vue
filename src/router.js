import Vue from 'vue'
import Router from 'vue-router'

// Aqui vamos carregar nossos componentes, importando eles desta maneira serão criados arquivos separados para cada um dos componentes e estes só serão carregados após a rota ser acessada.
const Login = () => import('@/views/Login' /* webpackChunkName: "login" */)
const Register = () => import('@/views/Register' /* webpackChunkName: "register" */)
const Chat = () => import('@/views/Chat' /* webpackChunkName: "chat" */)

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'register',
      path: '/register',
      component: Register
    },
    {
      name: 'chat',
      path: '/',
      component: Chat
    },
    // Ao definirmos uma rota com path * significa que tudo que não coincidir com uma das rotas já definidas irá utilizar esta rota. Útil para construção de páginas de erro 404 por exemplo. No nosso caso iremos redirecionar para o chat.
    {
      path: '*',
      redirect: '/'
    }
  ]
})
