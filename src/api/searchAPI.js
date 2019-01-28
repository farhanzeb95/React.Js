import { SearchException } from '../exceptions/search'
import axios from 'axios';

export const fetchSearchResults = async (searchQuery, category) => {
  let searchResults
  try {
    const response = await axios.get('/items/search', {
      params: {
        category: category.toLowerCase() === "all" ? "" : category,
        searchQuery: searchQuery
      }
    })
    searchResults = response.data
    return searchResults
  } catch (error) {
    throw new SearchException("There was an error fetching the search results.")
  }
}