import { 
  fetchUserItems, 
  createItem,
  fetchInitialData 
} from '../api/items'
import {
  showLoadingPage,
  hideLoadingPage
} from './loading'
import { addError, removeError } from '../actions/error'
import { removeSuccess, addSuccess } from './success';
import { handleAddDashaboardItems } from './dashboardItems';

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export const ADD_ITEM = 'ADD_ITEM'
export const CLEAR_ITEMS = 'CLEAR_ITEMS'


export function handleFetchInitialData() {
  return async (dispatch) => {
    try {
      dispatch(showLoadingPage())
      dispatch(removeSuccess())
      let initialData = await fetchInitialData()
      dispatch(receiveItems(initialData))
      dispatch(addSuccess())
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(hideLoadingPage())
    }
  }
}

export function clearItems() {
  return {
    type: CLEAR_ITEMS,
  }
}

export function receiveItems(items) {
  return {
    type: RECEIVE_ITEMS,
    items
  }
}

export function handleReceiveDashboardItems() {
  return async (dispatch) => {
    try {
      dispatch(showLoadingPage())
      const userItems = await fetchUserItems()
      dispatch(handleAddDashaboardItems(userItems))
      dispatch(hideLoadingPage())
    } catch(e) {
      // Handle the case where there is an error fetching the items from the db
    }
  }
}

export function handleCreateItem(item) {
  return async (dispatch) => {
    try {
      dispatch(showLoadingPage())
      dispatch(removeError())
      dispatch(removeSuccess())
      const {error, success} = await createItem(item)
      if (error) {
        console.log("Error: ", error)
        dispatch(addError(error))
      } else {
        dispatch(addSuccess())
        const userItems = await fetchUserItems()
        dispatch(handleAddDashaboardItems(userItems))
      }
    } catch(e) {
      console.log("This item was not saved succesfully")
    } finally {
      dispatch(hideLoadingPage())
    }
  }
}