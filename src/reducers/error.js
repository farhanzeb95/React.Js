import { ADD_ERROR, REMOVE_ERROR } from '../actions/error'

export default function error(state='', action) {
  switch(action.type) {
    case ADD_ERROR :
      return action.msg
    case REMOVE_ERROR :
      return ''
    default: return state
  }
}