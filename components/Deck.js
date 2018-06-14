import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';

class Deck extends React.Component {
  render() {
    console.log('props', this.props);
    const { title: deck, questions } = this.props;

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

function mapStateToProps(state, { navigation }) {
  const { title } = navigation.state.params;
  return state[title] || { title, questions: [] };
}

export default connect(mapStateToProps)(Deck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
