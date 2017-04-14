import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  View
} from 'react-native';

import { connect } from 'react-redux'
import Film from '~/components/Film';
import { receiveFilms } from '~/actions/films';

class FilmsView extends Component {
  constructor(props) {
    super(props);
  }

  renderFilms() {
    let films = this.props.films.byId.map((film, i) => {
      return (
        <Film key={i} film={film} />
      )
    })
    return films;
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          { this.renderFilms() }
        </ScrollView>
      </View>
    );
  }
}

export default connect(
  (state) => ({
    films: state.films
  })
)(FilmsView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#0E0E0E',//'#373028',
    paddingTop: 30,
  },
});
