import React, { PropTypes } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';


TouchableListItem.propTypes = {
  text: PropTypes.string.isRequired,
  onItemPress: PropTypes.func.isRequired
}

export default function TouchableListItem (props) {
  return (
    <TouchableOpacity onPress={props.onItemPress}>
      <Text style={styles.linkText}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  linkText: {
    color: '#10DDFA',
    fontSize: 32,
    marginBottom: 20,
  },
});
