import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { AppLoading } from 'expo'
import { getDecks } from '../utils/api';
import { receiveDecks } from '../actions';

class DeckList extends React.Component {
  state = {
    loading: true
  }
  componentDidMount() {

    const { dispatch } = this.props;
    getDecks().then(decks =>
      dispatch(receiveDecks(decks))
    ).then(() => this.setState({ loading: false }));
  }
  render() {
    console.log(this);
    if (this.state.loading) {
      return <AppLoading />
    }
    const { decks } = this.props;
    const keys = Object.keys(decks);
    if (keys.length === 0) {
      return (<View style={styles.container}>
        <Text>No decks found</Text>
        <Button
          title="Add New Deck"
          onPress={() => this.props.navigation.navigate('NewDeck')}
        />
      </View>);
    }


    return (
      <View style={styles.container}>
        {keys.map(key =>
          <View key={key}>
            <Text>{decks[key].title}</Text>
            <Text>{decks[key].questions.length} cards</Text>
            <Button
              title="See Deck"
              onPress={() => this.props.navigation.navigate('Deck', { ...decks[key] })}
            />
          </View>
        )}
      </View>
    )
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

function mapsStateToProps(decks) {
  return {
    decks
  }
}
export default connect(mapsStateToProps)(DeckList)