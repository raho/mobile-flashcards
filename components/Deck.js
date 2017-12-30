import React from 'react'
import { View, Text } from 'react-native'

class Deck extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.deck.title}`,
  });
  render() {
    const {deck} = this.props.navigation.state.params
    return (
      <View>
        <Text>{deck.title}</Text>
      </View>
    )
  }
}

export default Deck