import axios from 'axios'
import { UserAuthException } from "../exceptions/userAuth";

export async function isSignedIn() {
  const response = await axios.get('/me', {})
  if (response.data.error) {
    return false
  }
  return response.data
}

// export async function getDataForLoggedUser() {
//   try {
//     const response = await axios.post('/me', {})
//     const {error, username} = response.data
//     if (error) {
//       console.log("Error getting logged user data: ", error)
//      return {error}
//     }
//     console.log("Username:", username)
//     return {username}
//   } catch(e) {
//     return {error: "An exceptional error has ocurred."}
//   }
// }

export async function logInUser(userdata) {
  try {
    const response = await axios.post('/user/login', userdata)
    const {error, username} = response.data
    if (error) {
      console.log("Error from backend: ", error)
     return {error}
    }
    console.log("Username:", username)
    return {username}
  } catch(e) {
    return {error: "An exceptional error has ocurred."}
  }
}

export async function logOutUser() {
  try {
    await axios.post('/user/logout',{})
  } catch(e) {
    const msg = "The user was not logged out"
    console.log(msg, e)
    throw new UserAuthException(msg)
  }
}