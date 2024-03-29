import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose //redux devtools

export default function configureStore() {
    return createStore(
        rootReducer,
        composeEnhancers(
        applyMiddleware( thunk )
    ))
}
