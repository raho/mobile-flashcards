import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { darkGray, gray, lightGray, white, lightTeal, teal, red } from '../utils/colors'
import RoundButton from './Button'
import SafeAreaView from 'react-native-safe-area-view'

class QuizScore extends React.Component {
  static navigationOptions = {
    title: 'Score'
  }

  componentDidMount() {
    // TODO: save the score
  }

  render() {
    const {quizState, deck, navigation, screenProps} = this.props
    const score = parseInt(100 * quizState.correctAnswers / deck.questions.length)
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.score}>Score: {score}%</Text>
        <View>
          <RoundButton
            onPress={() => {
              screenProps.rootNavigation.goBack()
              screenProps.rootNavigation.navigate(
                'QuizNavigator',
                { deckTitle: deck.title }
              )
            }} 
            title="Restart Quiz"
          />
          <RoundButton
            onPress={() => screenProps.rootNavigation.goBack()} 
            title="Back to Deck"
          />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'space-between'
  },
  score: {
    fontSize: 30,
    padding: 20,
    textAlign: 'center',
  }
})

function mapStateToProps ({decks}, ownProps) {
  return {
    deck: decks.find(deck => deck.title === ownProps.screenProps.deckTitle),
    quizState: ownProps.navigation.state.params.quizState
  }
}

export default connect(
  mapStateToProps
)(QuizScore)