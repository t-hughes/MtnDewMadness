import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import AppNavigator from '~/AppNavigator';

export default class MtnDewMadness extends Component {
  constructor() {
    super();
    console.disableYellowBox = true;
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({isLoading: false})),
    };
  }
  render() {
    if (this.state.isLoading) {
      return null;
    }
    return (
      <Provider store={this.state.store}>
        <AppNavigator />
      </Provider>
    );
  }
}
