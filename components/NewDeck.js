import React from 'react'
import { Alert, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native'
import { connect } from 'react-redux'
import UdaciStatusBar from './UdaciStatusBar'
import Button from './Button'
import { darkGray, gray, white, lightGray } from '../utils/colors'
import { saveDeckTitle } from '../actions'

class NewDeck extends React.Component {
  state = {
    text: ''    
  }

  submit() {
    const newDeckTitle = this.state.text.trim()
    
    const deckAlreadyExists = this.props.decks.some(deck => deck.title.toLowerCase() === newDeckTitle.toLowerCase()) 

    if (deckAlreadyExists) {
      Alert.alert(
        'Cannot add new deck',
        `Deck with title "${newDeckTitle}" already exists!`,
        { cancelable: false }
      )
    } else {
      Keyboard.dismiss()
      this.setState({text: ''})
      this.props.saveDeckTitle(newDeckTitle)
      this.props.navigation.navigate(
        'Deck',
        { title: newDeckTitle }
      )
    }
  }

  render() {
    return (
      <View>
        <UdaciStatusBar backgroundColor={darkGray} barStyle="light-content" />
        <View style={styles.container}>
          <Text style={styles.title}>What is the title of your new deck?</Text>
          <TextInput
            style={styles.input}
            placeholder="Deck Title"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <Button
            onPress={() => this.submit()}
            title="SUBMIT"
            disabled={this.state.text.trim() === ''}
          />
        </View>
      </View>
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
    textAlign: 'center',
    height: 40,
    borderColor: lightGray,
    borderWidth: 1,
    margin: 10,
    marginTop: 0
  }
})

function mapStateToProps ({decks}) {
  return {
    decks
  }
}

export default connect(
  mapStateToProps,
  { saveDeckTitle }
)(NewDeck)