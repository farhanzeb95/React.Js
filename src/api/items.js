import { ItemException } from '../exceptions/items'
import axios from 'axios'


export const fetchUserItems = async () => {
  try {
     const response = await axios.get('/items/search', {
      params: {
        user: true
      }
    })
     return response.data
  } catch (error) {
    throw new ItemException('There was an error fetching the initial data for this user' )
  }
}

export const createItem = async (item) => {
  try {
    const formData = new FormData()
    formData.append("name", item.name)
    formData.append("description", item.description)
    formData.append("condition", item.condition)
    formData.append("price", item.price)
    formData.append("category", item.category)
    formData.append("itemImage", item.itemImage)
  
    const response =  await axios({
      method: 'post',
      url: '/items/new',
      data: formData,
      config: { 
        headers: { 
          'Content-Type': 'multipart/form-data',
          'Cookie':  'auth_data'
        } 
      }
    })
    console.log("DATA RETURNED FROM SERVER: ", response.data)
    const {error, success} = response.data
    if (error) {
      return {error}
    }
    return {success}
  } catch(e) {
    console.log("There was an exceptional error.")
  }

}

export async function fetchInitialData() {
  let initialData
  try {
    const response = await axios.get('/items/search', {
      params: {
        category: "",
        searchQuery: "",
        resultLimit: 6,
      }
    })
    console.log("DATA RETURNED FROM SERVER: ", response.data)
    return response.data
  } catch (error) {
    console.log("There was an error fetching the search results.")
  }
}
