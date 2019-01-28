import { 
  SET_CATEGORY,
  SET_SEARCH_QUERY,
  RECEIVE_SEARCH_RESULTS 
} from '../actions/search'

const initialState = {
  category: 'All',
  searchQuery: '',
  searchResults: [],
}

export default function search(state=initialState, action) {
  switch(action.type) {
    case SET_CATEGORY :
      return {
        ...state,
        category: action.category
      }
    case SET_SEARCH_QUERY :
      return {
        ...state,
        searchQuery: action.searchQuery
      }
    case RECEIVE_SEARCH_RESULTS :
      return {
        ...state,
        searchResults: action.searchResults 
      }
    default: 
      return state
  }
}
