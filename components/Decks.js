import React from 'react'
import { FlatList, StatusBar, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { connect } from 'react-redux'
import { darkGray, gray, lightGray, white } from '../utils/colors'

const DeckListItem = ({item, onPress}) => {
  return (
      <TouchableHighlight 
        onPress={onPress}
        underlayColor={lightGray}
      >
        <View style={styles.item}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemSubtitle}>{item.questions.length + (item.questions.length === 1 ? ' card' : ' cards')}</Text> 
        </View>
      </TouchableHighlight>
  )
}

class Decks extends React.Component {
  static navigationOptions = {
    title: 'Decks',
  };
  render() {
    const {decks, navigation} = this.props
    return (
      <View style={styles.container}>
        <FlatList
          data={decks}
          renderItem={({item}) => (
            <DeckListItem 
              item={item}
              onPress={() => navigation.navigate(
                'Deck',
                { deck: item }
              )}
            />
          )}
          ItemSeparatorComponent={ () => <View style={ { height: 1, backgroundColor: lightGray } } /> }
          keyExtractor={(deck, index) => deck.title}
        />
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: white
  },
  item: {
    height: 80,
    padding: 15
  },
  highlight: {
    height: 80,
    backgroundColor: lightGray
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

function mapStateToProps ({decks}) {
  return {
    decks
  }
}
export default connect(
  mapStateToProps
)(Decks)