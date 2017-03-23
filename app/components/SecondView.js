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

export default class SecondView extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
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

        <Text>Second View :)</Text>

      </View>
    );
  }
}

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
    backgroundColor: '#373028',
  },
});
