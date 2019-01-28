import { combineReducers } from "redux"
import authedUser from "./authedUser"
import search from './search'
import items from './items'
import loading from './loading'
import redirect from './redirect'
import error from './error'
import success from './success'
import dashboardItems from './dashboardItems'
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
    authedUser,
    search,
    items,
    loading,
    redirect,
    error,
    success,
    dashboardItems,
    loadingBar: loadingBarReducer
})