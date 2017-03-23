import React, { Component } from 'react';
import MainRouter from '~/router';
import FirstView from '~/components/FirstView'
import {
  Navigator,
  BackAndroid
} from 'react-native';

export default class AppNavigator extends Component {
  constructor(props) {
    super(props)

    let initialRoute = {
      title: 'First View',
      component: FirstView,
      index: 0
    }

    this.state = {
      initialRoute
    }
  }

  componentWillReceiveProps(nextProps) {
    if (typeof(nextProps.tabIndex) !== 'undefined') {
      _tabIndex = nextProps.tabIndex
      this.setState({tabIndex: nextProps.tabIndex})
    }
  }

  renderScene(route, navigator) {
    this.router = this.router || this.getRouter(navigator);
    _router = this.router
    if (route.component) {
      return React.createElement(route.component, Object.assign({}, route.props,
        {
          ref: view => this[route.name] = view,
          router: this.router,
        }
      ));
    }
  }

  configureScene(route, routeStack) {
    if (route.sceneConfig) {
      return route.sceneConfig;
    }
    if (route.transition) return Navigator.SceneConfigs[route.transition];
    else return Navigator.SceneConfigs.FloatFromRight;
  }

  getRouter(navigator) {
    return new MainRouter(navigator)
  }

  render() {
    return (
      <Navigator
        style={{ backgroundColor: '#373028'}}
        ref="sisuNavigator"
        initialRoute={this.state.initialRoute}
        configureScene={this.configureScene.bind(this)}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}

// Code for Android Back Arrow
BackAndroid.addEventListener('hardwareBackPress', () => {
  let routes = _navigator.getCurrentRoutes()
  let activeRoute = routes[routes.length - 1]

  if (routes.length > 1) {
    _router.pop()
    return true
  } else {
    if ((activeRoute.title === 'Dashboard' || activeRoute.title === 'Team List') && activeRoute.index === 0 && _tabIndex === 0) {
      return false
    } else if (_tabIndex > 0 && activeRoute.title === 'Dashboard' || _tabIndex > 0 && activeRoute.title === 'Team List') {
      _dispatch(setActiveTab(0))
      return true
    } else {
      _dispatch(setActiveTab(0))
      let routeStack = [{
        title: 'Dashboard',
        component: TabViewContainer,
        index: 0
      }]
      _navigator.immediatelyResetRouteStack(routeStack)
      return true
    }
  }
})
