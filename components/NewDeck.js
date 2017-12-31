import React from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { connect } from 'react-redux'
import UdaciStatusBar from './UdaciStatusBar'
import { darkGray, gray, white, lightGray } from '../utils/colors'
import { addDeck } from '../actions'

class NewDeck extends React.Component {
  state = {
    text: ''    
  }
  
  submit() {
    const newDeckName = this.state.text.trim()
    
    const deckAlreadyExists = this.props.decks.some(deck => deck.title.toLowerCase() === newDeckName.toLowerCase()) 

    if (deckAlreadyExists) {
      Alert.alert(
        'Cannot add new deck',
        `Deck with name ${newDeckName} already exists!`,
        { cancelable: false }
      )
    } else {
      this.props.addDeck(newDeckName)
      this.setState({text: ''})
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
          <View style={ { height: 1, backgroundColor: lightGray, marginBottom: 20 } }/>
          <Button
            onPress={() => this.submit()}
            title="SUBMIT"
            color={darkGray}
            disabled={this.state.text.trim() === ''}
            accessibilityLabel="Submit new deck"
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
    margin: 20,
    marginTop: 0
  }
})

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(
  mapStateToProps,
  { addDeck }
)(NewDeck)