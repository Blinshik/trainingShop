import {ADD_CART} from '../types.js'

const initialState = {
  cartItems: []
}

  const cartReducer = (state = initialState, action) => {
    
    switch (action.type) {
      case ADD_CART:
        return { ...state, cartItems: state.cartItems.concat([action.payload]) }
        default: return state
    }
}

export default cartReducer