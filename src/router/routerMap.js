import pageHome from '../view/pages/home'
import pageProfile from '../view/pages/profile'
import pageLogin from '../view/pages/login'
import pageError from '../view/pages/error'

const ROUTER_MAP = {
  HOME: {
    path: '/',
    page: pageHome,
    isAuth: false,
  },
  LOGIN: {
    path: '/login',
    page: pageLogin,
    isAuth: false,
  },
  PROFILE: {
    path: '/profile',
    page: pageProfile,
    isAuth: true,
  },
  NOT_FOUND: {
    path: '/nonexistent',
    page: pageError,
    isAuth: false,
  },
}

export default ROUTER_MAP
