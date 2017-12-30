import { ADD_DECK } from '../actions'


// TODO: use redux + AsyncStorage: https://github.com/rt2zz/redux-persist
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
        ...action.deck
      ]
    default :
      return state
  }
}

export default decks