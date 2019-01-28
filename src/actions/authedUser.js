import { createUser } from '../api/userAPI'
import { logInUser, logOutUser } from '../api/authAPI'
import { receiveItems } from '../actions/items'
import { fetchUserItems } from '../api/items'
import { showLoadingPage, hideLoadingPage } from './loading'
import { addError, removeError } from '../actions/error'
import { handleAddDashaboardItems } from './dashboardItems';
//import { getDataForLoggedUser } from '../api/authAPI'

export const ADD_AUTHED_USER = 'ADD_AUTHED_USER'
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER'

function addAuthedUser(username) {
  return {
    type: ADD_AUTHED_USER,
    username
  }
}

export function handleAddAuthedUser(userData) {
  return async (dispatch) => {
    try {
      dispatch(showLoadingPage())
      dispatch(removeError())
      let {username, error} = await createUser(userData)
      if (error) {
        console.log("There was an error: ", error)
        dispatch(addError(error))
      } else {
        console.log("The user was saved: ", username)
        dispatch(addAuthedUser(username))
      }
    } catch (ex) {
      // handle this later.
    } finally {
      dispatch(hideLoadingPage())
    }
  }
}

export function removeAuthedUser() {
  return {
    type: REMOVE_AUTHED_USER,
  }
}

export function handleRemoveAuthedUser() {
  return async (dispatch) => {
    try {
      dispatch(showLoadingPage())
      await logOutUser()
      dispatch(removeAuthedUser())
      dispatch(hideLoadingPage())
    } catch(error) {
      console.log(error)
    }
  }
}

export function handleLoginUser(userData) {
  return async (dispatch) => {
    try {
      dispatch(showLoadingPage())
      dispatch(removeError())
      let {username, error} = await logInUser(userData)
      if (error) {
        console.log("There was an error: ", error)
        dispatch(addError(error))
      } else {
        console.log("The user was logged in: ", username)
        dispatch(addAuthedUser(username))
        const userItems = await fetchUserItems()
        dispatch(handleAddDashaboardItems(userItems))
      }
    } catch (error) {
      // handle later
    }
    finally {
      dispatch(hideLoadingPage())
    }
  }
}

// export function handleGetDataForLoggedInUser() {
//   return async (dispatch) => {
//     try {
//       dispatch(showLoadingPage())
//       dispatch(removeError())
//       let {username, error} = await getDataForLoggedUser()
//       if (error) {
//         console.log("There was an error getting logged user data: ", error)
//         dispatch(addError(error))
//       } else {
//         console.log("The user was logged in: ", username)
//         dispatch(addAuthedUser(username))
//         const userItems = await fetchUserItems()
//         dispatch(receiveItems(userItems))
//       }
//     } catch (error) {
//       // handle later
//     }
//     finally {
//       dispatch(hideLoadingPage())
//     }
//   }
// }
