import { 
  SHOW_LOADING_PAGE,
  HIDE_LOADING_PAGE,
 } from "../actions/loading"

export default function loading(state = false, action) {
  switch (action.type) {
    case SHOW_LOADING_PAGE:
      return true
    case HIDE_LOADING_PAGE:
      return false
    default:
      return state
  }
}