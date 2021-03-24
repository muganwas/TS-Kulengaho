import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { apiMiddleware } from 'redux-api-middleware';
import logger from 'redux-logger';

var middleware;
// apply logger only in development and staging
if (process.env.NODE_ENV !== 'production') middleware = applyMiddleware(promise, thunk, apiMiddleware, logger);
else middleware = applyMiddleware(promise, thunk, apiMiddleware);

const initialState = {};

const allReducers = combineReducers({
//put all reducers here
});

const store = createStore(
    allReducers,
    initialState,
    middleware 
)

export default store;