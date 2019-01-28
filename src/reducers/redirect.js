import { FIRE_REDIRECT } from '../actions/redirect'

export default function redirect(state=false, action) {
  switch(action.type) {
    case FIRE_REDIRECT :
      return !state
    default: return state
  }
}