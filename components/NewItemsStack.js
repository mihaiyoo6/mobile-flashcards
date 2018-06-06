import React from 'react';
import { createStackNavigator } from 'react-navigation';
import NewDeck from './NewDeck';
import NewQuestion from './NewQuestion';

const NewItemsNav = createStackNavigator({
  NewDeck: {
    screen: NewDeck,
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: props => ({
      title: 'Add new Card'
    })
  }
});

export default NewItemsNav;
