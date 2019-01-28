import { ADD_DASHBOARD_ITEMS, CLEAR_DASHBOARD_ITEMS } from "../actions/dashboardItems";

export default function dashboardItems(state={}, action) {
  switch(action.type) {
    case ADD_DASHBOARD_ITEMS :
      return action.items
    case CLEAR_DASHBOARD_ITEMS :
      return {}
    default: return state
  }
}