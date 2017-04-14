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
import People from '~/components/People';
import { receivePeople } from '~/actions/people';

class PeopleView extends Component {
  constructor(props) {
    super(props);
  }

  renderPeople() {
    let people = this.props.people.byId.map((person, i) => {
      return (
        <People key={i} person={person} />
      )
    })
    return people;
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          { this.renderPeople() }
        </ScrollView>
      </View>
    );
  }
}

export default connect(
  (state) => ({
    people: state.people
  })
)(PeopleView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#0E0E0E',//'#373028',
    paddingTop: 30,
  },
});
