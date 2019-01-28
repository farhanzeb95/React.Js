export const SHOW_LOADING_PAGE = 'SHOW_LOADING_PAGE'
export const HIDE_LOADING_PAGE = 'HIDE_LOADING_PAGE'

export function showLoadingPage() {
  return {
    type: SHOW_LOADING_PAGE
  }
}

export function hideLoadingPage() {
  return{
    type: HIDE_LOADING_PAGE
  }
}