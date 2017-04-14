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

export default class FirstView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmitPress = this.handleSubmitPress.bind(this); // Makes submit work
  }

  handleSubmitPress() {
    this.setState({
      username: '',
      password: ''
    });

    this.props.router.toSecondView();
  }


  render() {
    return (
      <View style={styles.container}>

        {/* Add logo image */}
        <Image
          source={require('../img/starwars.png')}
          resizeMode="contain"
          style={styles.logo}
         />

        {/* Submit */}
        <TouchableOpacity
          onPress={this.handleSubmitPress}
        >
          <Text style={[styles.submitButton, styles.buttonText]}>Get Started</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: '80%',
  },
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
    borderColor: '#EBC75E',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    width: '50%',
    textAlign: 'center',
  },
  buttonText: {
    color: '#EBC75E',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0E0E0E',
  },
});
