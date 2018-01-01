import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { darkGray, gray, lightGray, white, lightTeal, teal, red } from '../utils/colors'
import RoundButton from './Button'
import SafeAreaView from 'react-native-safe-area-view'

class Quiz extends React.Component {
  state = {
    showingQuestion: true
  }
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Quiz',
    headerRight: (
      <Button title="Cancel" color={lightTeal} onPress={() => screenProps.rootNavigation.goBack()} />
    )
  })

  answer(correct) {
    const {navigation, quizState, deck} = this.props
    const {currentQuestion, correctAnswers} = quizState
    const newQuizState = {
      currentQuestion: currentQuestion + 1,
      correctAnswers: correctAnswers + (correct ? 1 : 0)
    }
    if (currentQuestion === deck.questions.length - 1) {
      // it was last question
      navigation.navigate('QuizScore', {quizState: newQuizState})
    } else {
      navigation.navigate('Quiz', {quizState: newQuizState})
    }
  }

  render() {
    const {deck, quizState} = this.props
    const {currentQuestion} = quizState 
    const {showingQuestion} = this.state
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.counter}>{currentQuestion + 1} / {deck.questions.length}</Text>
        { showingQuestion && 
          <View>
            <Text style={styles.question}>{deck.questions[currentQuestion].question}</Text>
            <Button title="Answer" color={red} onPress={() => this.setState({showingQuestion: false})} />
          </View>
        }
      { !showingQuestion && 
          <View>
            <Text style={styles.question}>{deck.questions[currentQuestion].answer}</Text>
            <Button title="Question" color={red} onPress={() => this.setState({showingQuestion: true})} />
          </View>
        } 
        <View>
          <RoundButton
            onPress={() => this.answer(true)}
            title="Correct"
            backgroundStyle={{backgroundColor: teal}}
          />
          <RoundButton
            onPress={() => this.answer(false)}
            title="Incorrect"
            backgroundStyle={{backgroundColor: red}}
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
  counter: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10
  },
  question: {
    fontSize: 30,
    padding: 20,
    textAlign: 'center',
  }
})

function mapStateToProps ({decks}, ownProps) {
  const params = ownProps.navigation.state.params
  return {
    deck: decks.find(deck => deck.title === ownProps.screenProps.deckTitle),
    quizState: params && params.quizState ? params.quizState : {
      currentQuestion: 0,
      correctAnswers: 0
    }
  }
}

export default connect(
  mapStateToProps
)(Quiz)