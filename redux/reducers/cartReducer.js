import {ADD_CART} from '../types.js'
import {REMOVE_CART} from '../types.js'
import { MINUS_CART } from '../types.js'
import { PLUS_CART } from '../types.js'

const initialState = {
  cartItems: []
}

  const cartReducer = (state = initialState, action) => {
    
    switch (action.type) {
      case ADD_CART:
      const complexArray = state.cartItems
      const ArrItemPerm = complexArray.find((itemArr) => (action.payload === itemArr.item))
      const ArrItemPermIndex = complexArray.findIndex((itemArr) => (action.payload === itemArr.item))
        if (ArrItemPerm) {
          complexArray.splice(ArrItemPermIndex, 1, {
            item: action.payload,
            counter: ArrItemPerm.counter + 1,
          })
         return { ...state, cartItems: state.cartItems.slice(complexArray)}}
          else {
          return { ...state, cartItems: state.cartItems.concat([{
            item: action.payload,
            counter: 0,
        }])}}
        
        
        
      case REMOVE_CART:
        return { ...state, cartItems: state.cartItems.filter(item => item != action.payload)}

      case MINUS_CART:
        const complexArrayMinus = state.cartItems
        const ArrItemPermMinus = complexArrayMinus.find((itemArr) => (itemArr.item === action.payload.item))
        const ArrItemPermIndexMinus = complexArrayMinus.findIndex((itemArr) => (itemArr.item === action.payload.item))
        if(ArrItemPermMinus.counter){
          complexArrayMinus.splice(ArrItemPermIndexMinus, 1, {
            item: action.payload.item,
            counter: ArrItemPermMinus.counter - 1,
          })
        
       }
        return { ...state, cartItems: state.cartItems.slice(complexArrayMinus)}

        case PLUS_CART:
          const complexArrayPlus = state.cartItems
          const ArrItemPermPlus = complexArrayPlus.find((itemArr) => (itemArr.item === action.payload.item))
          const ArrItemPermIndexPlus = complexArrayPlus.findIndex((itemArr) => (itemArr.item === action.payload.item))
          
            complexArrayPlus.splice(ArrItemPermIndexPlus, 1, {
              item: action.payload.item,
              counter: ArrItemPermPlus.counter + 1,
            })
          
         
          return { ...state, cartItems: state.cartItems.slice(complexArrayPlus)}

        default: return state
    }
}

export default cartReducer