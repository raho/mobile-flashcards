import React from 'react'
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { white, darkGray } from '../utils/colors'

export default function TextButton ({ title, onPress, disabled = false, textStyle = {}, backgroundStyle = {} }) {
  return (
    <View style={disabled ? {opacity: 0.3} : {opacity: 1}}>
      <TouchableOpacity
        style={[Platform.OS === 'ios' ? styles.iosButton : styles.AndroidButton, backgroundStyle]}
        onPress={onPress}
        disabled={disabled}
      >
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 22,
    color: white
  },
  iosButton: {
    backgroundColor: darkGray,
    padding: 10,
    borderRadius: 7,
    height: 45,
    margin: 10
  },
  AndroidButton: {
    backgroundColor: darkGray,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  }
})