import ROUTER_MAP from './routerMap'
import { getLocalStorage } from '../utils/localStorage'

class Router {
  constructor() {
    this.routes = {}
    window.addEventListener('popstate', this.handlePopState.bind(this))
  }

  addRoute(path, handler, isAuth) {
    this.routes[path] = { handler, isAuth }
  }

  navigateTo(path) {
    history.pushState(null, '', path)
    this.handleRoute(path)
  }

  handlePopState() {
    this.handleRoute(window.location.pathname)
  }

  handleRoute(path) {
    const handler = this.routes[path].handler
    if (handler) {
      this.isRedirect(path) ? this.redirectToLogin() : handler()
    } else {
      console.log('404 Not Found')
    }
  }

  isRedirect(path) {
    const isAuthPage = this.routes[path].isAuth
    const isLogin = getLocalStorage('isLogin')
    return !isLogin && isAuthPage
  }

  redirectToLogin() {
    this.navigateTo(ROUTER_MAP.LOGIN.path)
  }

  setRouter() {
    Object.values(ROUTER_MAP).forEach(({ path, page, isAuth }) => {
      const handler = () => {
        page.render()
        page.setEvent()
      }
      this.addRoute(path, handler, isAuth)
    })
    this.handleRoute(window.location.pathname)
  }
}

const router = new Router()
export default router
