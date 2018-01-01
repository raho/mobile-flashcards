import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { darkGray, gray, lightGray, white, lightTeal, teal } from '../utils/colors'
import RoundButton from './Button'

class Quiz extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Quiz',
    headerRight: (
      <Button title="Cancel" color={lightTeal} onPress={() => screenProps.rootNavigation.goBack()} />
    )
  })
  render() {
    console.log(this.props.navigation)
    const {deck} = this.props
    return (
      <View style={styles.container}>
        <RoundButton
          onPress={() => this.props.navigation.navigate('Quiz')}
          title="NEXT"
          backgroundStyle={{backgroundColor: teal}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: white,
  }
})

function mapStateToProps ({decks}, ownProps) {
  return {
  }
}

export default connect(
  mapStateToProps
)(Quiz)