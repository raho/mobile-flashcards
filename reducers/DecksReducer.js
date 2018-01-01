import { ADD_DECK, ADD_CARD_TO_DECK } from '../actions'

const initialDecks = [
  {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
]

function decks (state = initialDecks, action) {
  switch (action.type) {
    case ADD_DECK :
      return [
        ...state,
        {title: action.title, questions: []}
      ]
    case ADD_CARD_TO_DECK :
      const decks = JSON.parse(JSON.stringify(state)); //clone decks
      const deck = decks.find(deck => deck.title === action.title)
      if (deck) {
        deck.questions.push(action.card)
      }
      return decks
    default :
      return state
  }
}

export default decks