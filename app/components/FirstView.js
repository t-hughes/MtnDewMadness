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
        <Image source={require('../img/bg.jpeg')} />

        {/* Username */}
        <View style={styles.inputWidth}>
          <TextInput
            style={styles.input}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            placeholder="Username"
            placeholderTextColor="#7FB53A"
          />
        </View>

        {/* Password */}
        <View style={styles.inputWidth}>
          <TextInput
            style={styles.input}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="#7FB53A"
          />
        </View>

        {/* Submit */}
        <TouchableOpacity
          onPress={this.handleSubmitPress}
        >
          <Text style={[styles.submitButton, styles.buttonText]}>Submit</Text>
        </TouchableOpacity>
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
