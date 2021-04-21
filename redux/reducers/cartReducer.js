import {ADD_CART} from '../types.js'
import {REMOVE_CART} from '../types.js'

const initialState = {
  cartItems: []
}

  const cartReducer = (state = initialState, action) => {
    
    switch (action.type) {
      case ADD_CART:
      const complexArray = state.cartItems
      const ArrItemPerm = complexArray.find((itemArr) => action.payload == itemArr.item)
      const ArrItemPermIndex = complexArray.findIndex((itemArr) => action.payload == itemArr.item)


        if (ArrItemPerm) {
          console.log(state.cartItems);
          complexArray.splice(ArrItemPermIndex, 1, {
            item: action.payload,
            counter: ArrItemPerm.counter + 1,
          })
         return { ...state, cartItems: complexArray }}
          else {
          // console.log(state.cartItems);
          return { ...state, cartItems: state.cartItems.concat([{
            item: action.payload,
            counter: 0,
        }])}}
        
        
        
      case REMOVE_CART:
        return { ...state, cartItems: state.cartItems.filter(item => item != action.payload)}
        default: return state
    }
}

export default cartReducer