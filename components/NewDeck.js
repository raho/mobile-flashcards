import React from 'react'
import { View, Text } from 'react-native'
import UdaciStatusBar from './UdaciStatusBar'
import { darkGray } from '../utils/colors'

const NewDeck = () => {
  return (
    <View>
      <UdaciStatusBar backgroundColor={darkGray} barStyle="light-content" />
      <Text>New Deck</Text>
    </View>
  )
}

export default NewDeck