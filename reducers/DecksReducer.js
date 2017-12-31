import { ADD_DECK } from '../actions'

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
    default :
      return state
  }
}

export default decks