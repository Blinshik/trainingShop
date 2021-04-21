import {combineReducers} from 'redux'
import cartReducer from './cartReducer.js'
import itemReducer from './itemReducer.js'

const rootReducer = combineReducers({
    carts: cartReducer,
    items: itemReducer
})

export default rootReducer