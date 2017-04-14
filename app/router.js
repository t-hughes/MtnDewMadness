import SecondView from '~/containers/SecondView';
import FilmsView from '~/containers/FilmsView';
import PeopleView from '~/containers/PeopleView';
import SpaceshipsView from '~/containers/SpaceshipsView';

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

  toFilmsView(props) {
    this.push(props, {
      title: 'Films View',
      component: FilmsView,
      transition: 'FloatFromRight'
    })
  }

  toPeopleView(props) {
    this.push(props, {
      title: 'People View',
      component: PeopleView,
      transition: 'FloatFromRight'
    })
  }

  toSpaceshipsView(props) {
    this.push(props, {
      title: 'Spaceships View',
      component: SpaceshipsView,
      transition: 'FloatFromRight'
    })
  }
}
