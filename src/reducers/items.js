import { RECEIVE_ITEMS, CLEAR_ITEMS } from '../actions/items'

export default function items(state={}, action) {
  switch(action.type) {
    case RECEIVE_ITEMS :
      return action.items
    case CLEAR_ITEMS :
      return {}
    default:
      return state
  }
}
