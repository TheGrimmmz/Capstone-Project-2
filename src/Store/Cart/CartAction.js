import { createAction } from "../../Utils/Reducer/Reducer";
import { CART_ACTION_TYPES } from "./CartTypes";

const addCartItem = (cartItems, addProduct) => {
    const cart = cartItems.find((cartItem) => cartItem.id === addProduct.id)
    if(cart){
        return cartItems.map((cartItem)=> cartItem.id === addProduct.id ?
            {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
    }
    return [...cartItems, {...addProduct, quantity: 1}]
}

const removeCartItem = (cartItems, removeCartItem ) => {
    const cart = cartItems.find((cartItem) => cartItem.id === removeCartItem.id)
    if(cart.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== removeCartItem.id)
    }
    return cartItems.map((cartItem)=>
        cartItem.id === removeCartItem .id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    )
}

const clearCartItem = (cartItems, clearItem) => {
    return cartItems.filter((cartItem) => cartItem.id !== clearItem.id)
}

export const addItem = (cartItems, addProduct) => {
    const newCartItems = addCartItem(cartItems, addProduct)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeItem = (cartItems, removeItem) => {
    const newCartItems = removeCartItem(cartItems, removeItem)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const clearItem = (cartItems, clearItem) => {
    const newCartItems = clearCartItem(cartItems, clearItem)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

export const clearCart = () => {
    return createAction(CART_ACTION_TYPES.SET_CART_EMPTY)
}

export const setIsCartOpen = (boolean) =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
