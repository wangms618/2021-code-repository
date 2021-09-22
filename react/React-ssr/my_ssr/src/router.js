import Login from './pages/login'
import App from './App'

export default [{
  component: App,
  router: [{
    path: '/login',
    component: Login,
    exact: true
  }]
}]