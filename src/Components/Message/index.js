import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Message = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text>{message.text}</Text>
      <Text style={styles.time}>{message.createdAt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{},
  time: {
    color:'gray',
    alignSelf :'flex-end',
  },

});

export default Message;