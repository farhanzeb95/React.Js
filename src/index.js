import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from "./reducers";
import middleware from './middleware'
import { handleFetchInitialData } from './actions/items'
// import { handleGetDataForLoggedInUser } from './actions/authedUser'

let store = createStore(reducer, middleware)
store.dispatch(handleFetchInitialData())
// store.dispatch(handleGetDataForLoggedInUser())

ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>, 
document.getElementById('root'))
