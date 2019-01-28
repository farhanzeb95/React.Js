import { fetchUserItems } from "../api/items";
import { hideLoadingPage, showLoadingPage } from "./loading";

export const ADD_DASHBOARD_ITEMS = 'ADD_DASHBOARD_ITEMS'
export const CLEAR_DASHBOARD_ITEMS = 'CLEAR_DASHBOARD_ITEMS'

export function addDashaboardItems(items) {
  return {
    type: ADD_DASHBOARD_ITEMS,
    items
  }
}

export function handleAddDashaboardItems() {
  return async (dispatch) => {
    try {
      dispatch(showLoadingPage())
      const userItems = await fetchUserItems()
      dispatch(addDashaboardItems(userItems))
      dispatch(hideLoadingPage())
    } catch(e) {
      // Handle the case where there is an error fetching the items from the db
    }
  }
}

export function clearDashaboardItems() {
  return {
    type: CLEAR_DASHBOARD_ITEMS,
  }
}

export function handleClearDashaboardItems() {
  return (dispatch) => {
    dispatch(showLoadingPage())
    dispatch(clearDashaboardItems())
    dispatch(hideLoadingPage())
  }
}