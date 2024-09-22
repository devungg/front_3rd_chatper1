import pageHome from '../view/pages/home'
import pageProfile from '../view/pages/profile'
import pageLogin from '../view/pages/login'
import pageError from '../view/pages/error'

const ROUTER_MAP = {
  HOME: {
    path: '/',
    view: pageHome,
    isAuth: false,
  },
  LOGIN: {
    path: '/login',
    view: pageLogin,
    isAuth: false,
  },
  PROFILE: {
    path: '/profile',
    view: pageProfile,
    isAuth: true,
  },
  NOT_FOUND: {
    path: '/nonexistent',
    view: pageError,
    isAuth: false,
  },
}

export default ROUTER_MAP
