import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addQuestion } from '../actions';
import { addCardToDeck } from '../utils/api';

class NewQuestion extends React.Component {
  state = {
    question: '',
    answer: ''
  }
  onPress = redirect => {
    const { deck } = this.props.navigation.state.params;
    this.props.addQuestion({ ...this.state, deck });
    addCardToDeck({ ...this.state, deck }).then(() => {
      this.setState({ question: '', answer: '' })
      redirect && this.props.navigation.navigate('DeckList');
    });

  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up NewQuestion.js to start working on your NewQuestion!</Text>
        <Text>Insert your question</Text>
        <TextInput placeholder='Question'
          value={this.state.question}
          onChangeText={question => this.setState({ question })} />
        <Text>Insert your answer</Text>
        <TextInput placeholder='Answer'
          value={this.state.answer}
          onChangeText={answer => this.setState({ answer })} />
        <TouchableOpacity onPress={() => this.onPress(true)}>
          <Text>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.onPress(false)}>
          <Text>Save & Add New</Text>
        </TouchableOpacity>
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

function mapDispatchToProps(dispatch) {
  return {
    addQuestion: question => dispatch(addQuestion(question))
  }
}

export default connect(null, mapDispatchToProps)(NewQuestion)
