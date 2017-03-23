import SecondView from '~/components/SecondView';

export default class MainRouter {
  constructor(navigator) {
    this.navigator = navigator
    this.pop = this.pop.bind(this)
  }

  push(props, route) {
    const routesList = this.navigator.getCurrentRoutes()
    const nextIndex = routesList[routesList.length - 1].index + 1
    route.props = props
    if (!route.index && route.index !== 0) {
      route.index = nextIndex
    }
    this.navigator.push(route)
  }

  pop() {
    this.navigator.pop()
  }

  toSecondView(props) {
    this.push(props, {
      title: 'Second View',
      component: SecondView,
      transition: 'FloatFromRight'
    })
  }
}
