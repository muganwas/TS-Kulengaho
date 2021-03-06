import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { apiMiddleware } from 'redux-api-middleware'
import logger from 'redux-logger'
import { generalInfoReducer, userInfoReducer } from './reducers'

var middleware
// apply logger only in development and staging
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test')
  middleware = applyMiddleware(promise, thunk, apiMiddleware, logger)
else middleware = applyMiddleware(promise, thunk, apiMiddleware)

const initialState = {}

const allReducers = combineReducers({
  genInfo: generalInfoReducer,
  userInfo: userInfoReducer,
})

const store = createStore(allReducers, initialState, middleware)
export default store
