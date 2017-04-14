import React, { PropTypes } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';


Film.propTypes = {
  film: PropTypes.object.isRequired
}

export default function Film (props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{props.film.title}</Text>
      <View>
        <Text style={styles.text}>Director: {props.film.director}</Text>
        <Text style={styles.text}>Opening: {props.film.opening_crawl}</Text>
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
