import React from 'react'
import { Alert, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import { connect } from 'react-redux'
import Button from './Button'
import { darkGray, gray, white, lightGray, green } from '../utils/colors'
import { addCardToDeck } from '../actions'

class NewCard extends React.Component {
  static navigationOptions = {
    title: 'Add Card',
  };
  state = {
    question: '',
    answer: ''
  }

  submit() {
    const {deck} = this.props
    const question = this.state.question.trim()
    const answer = this.state.answer.trim()
    
    const questionAlreadyInDeck = deck.questions.some(q => q.question.toLowerCase() === question.toLowerCase()) 

    if (questionAlreadyInDeck) {
      Alert.alert(
        'Cannot add new card',
        `Card with question "${question}" already exists!`,
        { cancelable: false }
      )
    } else {
      Keyboard.dismiss()
      this.setState({question: '', answer: ''})
      this.props.addCardToDeck(deck.title, {question, answer})
      this.props.navigation.goBack()
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>What question would you like to add?</Text>
        <TextInput
          style={styles.input}
          placeholder="Question"
          onChangeText={(text) => this.setState({question: text})}
          value={this.state.question}
        />
        <TextInput
          style={styles.input}
          placeholder="Answer"
          onChangeText={(text) => this.setState({answer: text})}
          value={this.state.answer}
        />
        <Button
          onPress={() => this.submit()}
          title="SUBMIT"
          backgroundStyle={{backgroundColor: green}}
          disabled={this.state.question.trim() === '' || this.state.answer.trim() === ''}
        />
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="CANCEL"
          backgroundStyle={{backgroundColor: gray}}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: darkGray,
    padding: 20
  },
  input: {
    paddingLeft: 5,
    height: 40,
    borderColor: lightGray,
    borderWidth: 1,
    margin: 10
  }
})

function mapStateToProps ({decks}, ownProps) {
  return {
    deck: decks.find(deck => deck.title === ownProps.navigation.state.params.deckTitle)
  }
}

export default connect(
  mapStateToProps,
  { addCardToDeck }
)(NewCard)