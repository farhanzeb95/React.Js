export const ADD_ERROR = 'ADD_ERROR'
export const REMOVE_ERROR = 'REMOVE_ERROR'

export function addError(msg) {
  return {
    type: ADD_ERROR, 
    msg
  }
}

export function removeError() {
  return {
    type: REMOVE_ERROR
  }
}