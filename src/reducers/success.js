import {ADD_SUCCESS, REMOVE_SUCCESS} from '../actions/success'

export default function success(state=false, action) {
  switch(action.type) {
    case ADD_SUCCESS :
      return true
    case REMOVE_SUCCESS :
      return false
    default: return state
  }
}