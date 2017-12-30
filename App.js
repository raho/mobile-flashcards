import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { Constants } from 'expo'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import Decks from './components/Decks'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'
import { darkGray, white } from './utils/colors'

// TODO: New Deck (save and check with AsyncStorage...)
// TODO: use redux + AsyncStorage: https://github.com/rt2zz/redux-persist
// TODO: continue with Deck screen 

const DecksNavigator = StackNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: darkGray,
      }
    }
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: darkGray,
      }
    }
  }
})

const Tabs = TabNavigator({
  Decks: {
    screen: DecksNavigator,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-list-box' size={30} color={tintColor} />
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? darkGray : white,
    style: {
      backgroundColor: Platform.OS === 'ios' ? white : darkGray,
    }
  }
})

const store = createStore(reducer)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Tabs />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
