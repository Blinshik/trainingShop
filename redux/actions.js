import {ADD_CART} from './types.js'

export default function addCart(cartItem) {
    return {
        type: ADD_CART,
        payload: cartItem
    }
}