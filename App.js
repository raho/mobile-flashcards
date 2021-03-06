import React from 'react'
import { Platform, StatusBar, View } from 'react-native'
import { Constants } from 'expo'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { StackNavigator } from 'react-navigation'
import Decks from './components/Decks'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'
import QuizScore from './components/QuizScore'
import { darkGray, white, lightTeal } from './utils/colors'

import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux'
import reducer from './reducers'

import { setLocalNotification } from './utils/notifications'

// configure redux
const config = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(config, reducer)
const store = createStore(persistedReducer)
const persistor = persistStore(store)

const DecksNavigator = StackNavigator(
  {
    Decks: { screen: Decks },
    Deck: { screen: Deck },
  }, 
  {
    navigationOptions: {
      headerTintColor: lightTeal,
      headerStyle: {
        backgroundColor: darkGray,
      }
    } 
  }
)

const QuizNavigator = StackNavigator(
  {
    Quiz: { screen: Quiz },
    QuizScore: { screen: QuizScore }
  },
  {
    navigationOptions: {
      headerTintColor: lightTeal,
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: darkGray,
      }
    } 
  } 
)

const ModalsNavigator = StackNavigator(
  {
    DecksNavigator: { screen: DecksNavigator },
    NewDeck: { screen: NewDeck },
    NewCard: { screen: NewCard },
    QuizNavigator: { screen: ({ navigation }) => 
      <QuizNavigator screenProps={{ rootNavigation: navigation, deckTitle: navigation.state.params.deckTitle }} /> 
    }
  },
  {
    mode: 'modal',
    navigationOptions: {
      header: null
    },
  }
)

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View style={{flex: 1}}>
            <StatusBar translucent barStyle="light-content" backgroundColor={darkGray} />
            <ModalsNavigator />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}
