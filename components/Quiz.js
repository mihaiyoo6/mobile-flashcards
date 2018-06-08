import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';

class Quiz extends React.Component {
  state = {
    questionIndex: 0,
    correctAnswers: 0,
    finished: false,
    deck: this.props.deck,
    questions: this.props.questions
  }
  showAnswer = qindex => {
    this.setState({ questions: this.state.questions.map((item, index) => qindex === index ? { ...item, showAnswer: true } : item) })
  }
  handleCorrect = qindex => {
    if (qindex >= this.state.questions.length - 1) {
      clearLocalNotification()
        .then(setLocalNotification)
      return this.setState({
        finished: true,
        questionIndex: this.state.questions.length,
        correctAnswers: this.state.correctAnswers + 1
      })
    }
    this.setState({
      questionIndex: this.state.questionIndex + 1,
      correctAnswers: this.state.correctAnswers + 1
    })
  }
  handleIncorrect = qindex => {
    if (qindex >= this.state.questions.length - 1) {
      clearLocalNotification()
        .then(setLocalNotification)
      return this.setState({
        finished: true,
        questionIndex: this.state.questions.length
      })
    }
    this.setState({
      questionIndex: this.state.questionIndex + 1
    })
  }
  restartQuiz = () => {
    this.setState({
      questionIndex: 0,
      correctAnswers: 0,
      finished: false,
      questions: this.props.questions
    })
  }
  render() {
    const { deck, questions, questionIndex, correctAnswers, finished } = this.state;
    return (
      <View style={styles.container}>
        <Text>{deck} Quiz has {questions.length} questions</Text>
        <Text>Correct Answers {correctAnswers}</Text>
        {finished
          ? <View>
            <Text> Congrats, you finished your quiz</Text>
            <TouchableOpacity onPress={() => this.restartQuiz()}>
              <Text>Restart Quiz</Text>
            </TouchableOpacity>
          </View>
          : <View>
            <Text>{questionIndex}/{questions.length}</Text>
            <Text>Q: {questions[questionIndex].question}</Text>
            {questions[questionIndex].showAnswer && <Text>A: {questions[questionIndex].answer}</Text>}
            <TouchableOpacity onPress={() => this.showAnswer(questionIndex)}>
              <Text>Show Answer</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleCorrect(questionIndex)}>
              <Text>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleIncorrect(questionIndex)}>
              <Text>Incorrect</Text>
            </TouchableOpacity>
          </View>
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

function mapStateToProps(state, { navigation }) {
  const { deck, questions } = navigation.state.params

  return {
    deck,
    questions: questions.map(item => Object.assign(item, { showAnswer: false }))
  }
}

export default connect(mapStateToProps)(Quiz)