import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { darkGray } from '../utils/colors'

const Decks = () => {
  return (
    <View>
      <Text style={styles.text}>Decks</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: darkGray,
  }
})

export default Decks