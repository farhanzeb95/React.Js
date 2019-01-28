import axios from 'axios'

export const createUser = async (userData) => {
  try {
    let response = await axios.post('/user/signup', userData)
    const {error, username} = response.data
    if (error) {
      console.log("Error from backend: ", error)
     return {error}
    }
    console.log("Username:", username)
    return {username}
  } catch (e) {
    return {error: "An exceptional error has ocurred."}
  }
}