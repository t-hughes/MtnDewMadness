import React, { PropTypes } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';


People.propTypes = {
  person: PropTypes.object.isRequired,
}

export default function People (props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{props.person.name}</Text>
      <View>
        <Text style={styles.text}>Gender: {props.person.gender}</Text>
        <Text style={styles.text}>Birth Year: {props.person.birth_year}</Text>
      </View>

      <View style={styles.divider}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  divider: {
    justifyContent: 'center',
    flexDirection: 'column',
    width: '50%',
    height: 2,
    backgroundColor: '#B5060D',
  },
  text: {
    width: '90%',
    color: '#D6BF7C',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  title: {
    color: '#10DDFA',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  }
});
