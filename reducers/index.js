import {
  ADD_DECK,
  RECEIVE_DECKS,
  ADD_QUESTION
} from '../actions';

const initialState = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export default function (state, action) {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state,
        [action.deck]: {
          title: action.deck,
          questions: []
        }
      }
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_QUESTION:
      const questions = state[action.deck]
        ? [...state[action.deck].questions, {
          question: action.question,
          answer: action.answer,
          showAnswer: false
        }]
        : [{
          question: action.question,
          answer: action.answer,
          showAnswer: false
        }];

      return {
        ...state,
        [action.deck]: {
          ...state[action.deck],
          questions
        }
      }
  }
}