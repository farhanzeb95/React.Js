import { 
    ADD_AUTHED_USER,
    REMOVE_AUTHED_USER, 
} from "../actions/authedUser"

export default function authedUser(state=null, action) {
    switch(action.type) {
        case ADD_AUTHED_USER :
          return action.username
        case REMOVE_AUTHED_USER :
          return null
        default:
            return state
    }
}
