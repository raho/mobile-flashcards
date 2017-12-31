export const ADD_DECK = 'ADD_DECK'

/**
 * take in a single title argument and add it to the decks. 
 */
export const saveDeckTitle = (title) => {
  return {
    type: ADD_DECK,
    title,
  }
}

/**
 * return all of the decks along with their titles, questions, and answers. 
 */
export const getDecks = () => {
  return []
}

/**
 * take in a single id argument and return the deck associated with that id. 
 */
export const getDeck = (id) => {
  return null
}


/**
 * take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title. 
 */
export const addCardToDeck = (title, card) => {

}