import { ADD_CART } from './types.js'
import { REMOVE_CART } from './types.js'

export default function addCart(cartItem) {
    return {
        type: ADD_CART,
        payload: cartItem
    }
}

export const removeCart = function removeCart(cartItem) {
    return {
        type: REMOVE_CART,
        payload: cartItem
    }
}