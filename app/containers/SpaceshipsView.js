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
import Spaceships from '~/components/Spaceships';
import { receiveSpaceships } from '~/actions/spaceships';

class SpaceshipsView extends Component {
  constructor(props) {
    super(props);
  }

  renderSpaceships() {
    let spaceships = this.props.spaceships.byId.map((ship, i) => {
      return (
        <Spaceships key={i} ship={ship} />
      )
    })
    return spaceships;
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          { this.renderSpaceships() }
        </ScrollView>
      </View>
    );
  }
}

export default connect(
  (state) => ({
    spaceships: state.spaceships
  })
)(SpaceshipsView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#0E0E0E',//'#373028',
    paddingTop: 30,
  },
});
