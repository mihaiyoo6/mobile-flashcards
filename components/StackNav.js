import React from 'react';
import { createStackNavigator } from 'react-navigation';
import DeckList from './DeckList';
import Deck from './Deck';
import Quiz from './Quiz';
// import NewDeck from './NewDeck';
import NewQuestion from './NewQuestion';

const stackNav = createStackNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: props => ({
      title: 'Your decks'
    })
  },
  Deck: {
    screen: Deck,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title
    })
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: props => ({
      title: 'Quiz Page'
    })
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: props => ({
      title: 'New Card'
    })
  }
});

export default stackNav;
