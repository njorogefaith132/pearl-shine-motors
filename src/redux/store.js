import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import carsReducer from './reducers/carsReducer'


const store = createStore(
    carsReducer,
    applyMiddleware(thunk)
)

export default store;