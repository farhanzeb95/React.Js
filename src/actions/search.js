import { fetchSearchResults } from '../api/searchAPI'
import { showLoadingPage, hideLoadingPage } from '../actions/loading'
import { fireRedirect } from '../actions/redirect'

export const SET_CATEGORY = 'SET_CATEGORY'
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS'


export function addCategory(category) {
  return {
    type: SET_CATEGORY,
    category,
  }
}

export function setSearchQuery(searchQuery) {
  return {
    type: SET_SEARCH_QUERY,
    searchQuery,
  }
}

function addSearchResults(searchResults) {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    searchResults
  }
}

export function handleFetchSearchResults(searchQuery, category) {
  return async (dispatch) => {
    try {
      dispatch(showLoadingPage())
      let searchResults = await fetchSearchResults(searchQuery, category)
      dispatch(addSearchResults(searchResults))
      dispatch(fireRedirect())
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(hideLoadingPage())
    }
  }
}



