import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { addDeck } from '../actions';
import { saveDeckTitle } from '../utils/api';

class NewDeck extends React.Component {
  state = {
    text: ''
  }
  onPress = () => {
    const title = this.state.text;
    this.props.addDeck(title);
    saveDeckTitle(title);
    this.setState({ text: '' });
    this.props.navigation.navigate('Deck', { title });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>What is the title of your new deck?</Text>
        <TextInput placeholder='Title'
          value={this.state.text}
          onChangeText={text => this.setState({ text })} />
        <TouchableOpacity onPress={this.onPress}>
          <Text>SUBMIT</Text>
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
    addDeck: deck => dispatch(addDeck(deck))
  }
}

export default connect(null, mapDispatchToProps)(NewDeck)
