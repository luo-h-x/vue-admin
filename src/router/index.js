import Vuerouter from 'vue-router'
import Vue from 'vue'
import Home from '../views/Home'
import Login from '../views/Login'
Vue.use(Vuerouter)

export const routes = [

  { path: '/Home', component: Home },
  { path: '/Login', component: Login }
]

const router = new Vuerouter({
  routes: routes
})

export default router
