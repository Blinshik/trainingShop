import { ADD_CART } from './types.js'
import { REMOVE_CART } from './types.js'
import { MINUS_CART } from './types.js'
import { PLUS_CART } from './types.js'

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

export const minusCart = function(cartItem) {
    return {
        type: MINUS_CART,
        payload: cartItem
    }
}

export const plusCart = function(cartItem) {
    return {
        type: PLUS_CART,
        payload: cartItem
    }
}