import React from 'react';
import { createStackNavigator } from 'react-navigation';
import DeckList from './DeckList';
import Deck from './Deck';
import Quiz from './Quiz';

const deckNav = createStackNavigator({
  DeckList: {
    screen: DeckList,
  },
  Deck: {
    screen: Deck,
    navigationOptions: props => ({
      title: 'Deck Page'
    })
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: props => ({
      title: 'Quiz Page'
    })
  }
});

export default deckNav;
