import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class NewDeck extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up NewDeck.js to start working on your NewDeck!</Text>
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
