import Vuerouter from 'vue-router'
import Vue from 'vue'
import Home from '../views/Home'
import Login from '../views/Login'
import Button from '../components/Button'
import Form from '../components/Form'
import Loading from '../components/Loading'
import ToolTip from '../components/ToolTip'
import Info from '../components/Info'
import Carousel from '../components/Carousel'
import Icon from '../components/Icon'
import Calendar from '../components/Calendar'

Vue.use(Vuerouter)

export const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/Home',
    component: Home,
    children: [
      {
        path: '/',
        component: Button
      },
      { path: '/Button', component: Button },
      { path: '/Form', component: Form },
      { path: '/Loading', component: Loading },
      { path: '/ToolTip', component: ToolTip },
      { path: '/Info', component: Info },
      { path: '/Carousel', component: Carousel },
      { path: '/Icon', component: Icon },
      { path: '/Calendar', component: Calendar }]
  },
  { path: '/Login', component: Login }
]

const router = new Vuerouter({
  routes: routes
})

export default router
