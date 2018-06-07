import React from 'react';
import { Text, View, Button, StatusBar } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import { Constants } from 'expo';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DeckStack from './components/DeckStack';
import NewItemsStack from './components/NewItemsStack';
import reducer from './reducers';
import { setLocalNotification } from './utils/helpers';


// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Details!</Text>
//       </View>
//     );
//   }
// }

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//         <Button
//           title="Go to Settings"
//           onPress={() => this.props.navigation.navigate('Settings')}
//         />
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//         <Button
//           title="Go to Home"
//           onPress={() => this.props.navigation.navigate('Home')}
//         />
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
//   Details: DetailsScreen,
// });

// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
//   Details: DetailsScreen,
// });
// function UdaciStatusBar({ backgroundColor, ...props }) {
//   return (
//     <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
//       <StatusBar translucent backgroundColor={backgroundColor} {...props} />
//     </View>
//   )
// }

const Tabs = createBottomTabNavigator({
  DeckStack: DeckStack,
  NewItemsStack: NewItemsStack,
},
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'DeckStack') {
          iconName = `cards${focused ? '' : '-outline'}`;
        } else if (routeName === 'NewItemsStack') {
          iconName = 'cards-variant';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  });



const store = createStore(
  reducer,
  applyMiddleware(logger)
);
export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Tabs />
        </View>
      </Provider>
    )
  }
}