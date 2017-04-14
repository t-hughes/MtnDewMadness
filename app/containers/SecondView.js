import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  View
} from 'react-native';

import { connect } from 'react-redux'
import TouchableListItem from '~/components/TouchableListItem';
import { receivePeople } from '~/actions/people';
import { receiveFilms } from '~/actions/films';
import { receiveSpaceships } from '~/actions/spaceships';

class SecondView extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
    this.handleItemPress = this.handleItemPress.bind(this);
    this.renderListItems = this.renderListItems.bind(this);
  }

  renderListItems() {
    const options = [
      {name: 'Films', endpoint: 'films', action: receiveFilms, route: 'toFilmsView'},
      {name: 'People', endpoint: 'people', action: receivePeople, route: 'toPeopleView'},
      {name: 'Spaceships', endpoint: 'starships', action: receiveSpaceships, route: 'toSpaceshipsView'},
    ];

    let renderedItems = options.map((item, i) => {
      return (
        <TouchableListItem key={i} text={item.name} onItemPress={() => this.handleItemPress(item)} />
      )
    });
    return renderedItems;
  }

  handleItemPress(item) {
    // Handle logic for hitting API and storing data
    const ADDRESS = `https://swapi.co/api/${item.endpoint}/`;
    console.log('pressed', item.endpoint);
    fetch(ADDRESS, {
      method: 'get'
    }).then((res) => {
      res.json()
      .then((data) => {
        this.props.dispatch(item.action(data.results))
        this.props.router[item.route]();
      })
      .catch((err) => {
        console.log('ERROR:', err)
      })
    }).catch((err) => {
      console.log('Error!', err);
    });
  }

  handleSubmitPress() {
    this.setState({
      username: '',
      password: ''
    });
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderListItems() }
      </View>
    );
  }
}

export default connect(
  (state) => ({
    people: state.people
  })
)(SecondView);

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    color: '#7FB53A',
    marginBottom: 20,
    paddingLeft: 15,
  },
  inputWidth: {
    width: '80%'
  },
  submitButton: {
    borderColor: '#7FB53A',
    borderWidth: 1,
    padding: 10,
    width: '50%',
    textAlign: 'center',
  },
  buttonText: {
    color: '#7FB53A',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0E0E0E',
  },
});
