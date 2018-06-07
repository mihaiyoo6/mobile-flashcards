import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Deck extends React.Component {
  render() {
    const { title: deck, questions } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>
        <Text>Open up Deck.js to start working on your Deck!</Text>
        <Button
          title="Add New Question"
          onPress={() => this.props.navigation.navigate('NewQuestion', { deck })}
        />
        {questions.length > 0 &&
          <Button
            title="Start Quiz"
            onPress={() => this.props.navigation.navigate('Quiz', { deck, questions })}
          />
        }
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
