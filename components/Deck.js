import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class Deck extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
  });
  render() {
    const {deck} = this.props
    return (
      <View>
        <Text>{deck.title}</Text>
      </View>
    )
  }
}

function mapStateToProps ({decks}, ownProps) {
  return {
    deck: decks.find(deck => deck.title === ownProps.navigation.state.params.title)
  }
}

export default connect(
  mapStateToProps
)(Deck)