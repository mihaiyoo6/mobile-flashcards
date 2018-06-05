import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class NewQuestion extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up NewQuestion.js to start working on your NewQuestion!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
