import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import carsReducer from './carsReducer'

const rootReducer = combineReducers({
  cartReducer,
  carsReducer
})

export default rootReducer;