import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { darkGray, gray, lightGray, white, teal } from '../utils/colors'
import Button from './Button'
import { NavigationActions } from 'react-navigation'

class Deck extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
  });
  addCard() {
    this.props.navigation.navigate(
      'NewCard',
      { deckTitle: this.props.deck.title }
    )
  }
  startQuiz() {
    this.props.navigation.navigate(
      'QuizNavigator',
      { deckTitle: this.props.deck.title }
    )
  }
  render() {
    const {deck} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.subtitle}>{deck.questions.length + (deck.questions.length === 1 ? ' card' : ' cards')}</Text> 
        <View style={{height: 20}}/>
        <Button
          onPress={() => this.addCard()}
          title="Add Card"
          color={darkGray}
        />
        <Button
          onPress={() => this.startQuiz()}
          title="Start Quiz"
          backgroundStyle={{backgroundColor: teal}}
          disabled={deck.questions.length === 0}
        />
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
    fontSize: 22,
    textAlign: 'center',
    color: darkGray,
    padding: 20
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    color: gray
  }
})

function mapStateToProps ({decks}, ownProps) {
  return {
    deck: decks.find(deck => deck.title === ownProps.navigation.state.params.title)
  }
}

export default connect(
  mapStateToProps
)(Deck)