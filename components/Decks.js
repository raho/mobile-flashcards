import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { darkGray, gray, lightGray } from '../utils/colors'

const Decks = ({decks}) => {
  console.log(JSON.stringify(decks))
  return (
    <View style={styles.container}>
      <FlatList
        data={decks}
        renderItem={({item}) => 
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemSubtitle}>{item.questions.length + (item.questions.length === 1 ? ' card' : ' cards')}</Text>
          </View>
        }
        ItemSeparatorComponent={ () => <View style={ { height: 1, backgroundColor: lightGray } } /> }
        keyExtractor={(deck, index) => deck.title}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  //  paddingTop: 22
  },
  item: {
    height: 80,
    padding: 15
  },
  itemTitle: {
    fontSize: 20,
    paddingBottom: 5,
    textAlign: 'center',
    color: darkGray,
  },
  itemSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: gray
  },
})

function mapStateToProps (decks) {
  return {
    decks
  }
}
export default connect(
  mapStateToProps,
)(Decks)