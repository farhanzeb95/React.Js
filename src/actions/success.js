export const ADD_SUCCESS = 'ADD_SUCCESS'
export const REMOVE_SUCCESS = 'REMOVE_SUCCESS'

export function addSuccess() {
  return {
    type: ADD_SUCCESS
  }
}

export function removeSuccess() {
  return {
    type: REMOVE_SUCCESS
  }
}