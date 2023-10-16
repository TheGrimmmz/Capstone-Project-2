import { createAction } from "../../Utils/Reducer/Reducer";
import { CART_ACTION_TYPES } from "./CartTypes";

/**
 * Adds a new item to the cart or updates an existing item's quantity.
 *
 * @param {Array} cartItems - An array of objects representing the items in the cart.
 * @param {Object} addProduct - The product to be added to the cart.
 * @param {string} addProduct.id - The unique identifier of the product.
 * @param {number} addProduct.quantity - The quantity of the product to be added.
 * @return {Array} - The updated array of cart items.
 */
const addCartItem = (cartItems, addProduct) => {
    const cart = cartItems.find((cartItem) => cartItem.id === addProduct.id)
    if(cart){
        return cartItems.map((cartItem)=> cartItem.id === addProduct.id ?
            {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        )
    }
    return [...cartItems, {...addProduct, quantity: 1}]
}

/**
 * Removes a specific cart item from the list of cart items.
 *
 * @param {Array} cartItems - The list of cart items.
 * @param {Object} removeCartItem - The cart item to remove.
 * @return {Array} The updated list of cart items after removing the specified cart item.
 */
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

/**
 * Remove a specific item from the cart.
 *
 * @param {Array} cartItems - The array of cart items.
 * @param {Object} clearItem - The item to be removed from the cart.
 * @return {Array} The updated array of cart items.
 */
const clearCartItem = (cartItems, clearItem) => {
    return cartItems.filter((cartItem) => cartItem.id !== clearItem.id)
}

/**
 * Adds an item to the cart.
 *
 * @param {Array} cartItems - The current items in the cart.
 * @param {Object} addProduct - The product to be added to the cart.
 * @return {Object} The updated cart items.
 */
export const addItem = (cartItems, addProduct) => {
    const newCartItems = addCartItem(cartItems, addProduct)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

/**
 * Removes an item from the cart.
 *
 * @param {Array} cartItems - The array of cart items.
 * @param {Object} removeItem - The item to be removed from the cart.
 * @return {Object} The new cart items after removing the item.
 */
export const removeItem = (cartItems, removeItem) => {
    const newCartItems = removeCartItem(cartItems, removeItem)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

/**
 * Clears a specific item from the cart items array and returns the updated cart items array.
 *
 * @param {Array} cartItems - The array of cart items.
 * @param {Object} clearItem - The item to be cleared from the cart items array.
 * @return {Object} The updated cart items array after clearing the specified item.
 */
export const clearItem = (cartItems, clearItem) => {
    const newCartItems = clearCartItem(cartItems, clearItem)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

/**
 * Clears the cart.
 *
 * @return {object} The action to set the cart as empty.
 */
export const clearCart = () => {
    return createAction(CART_ACTION_TYPES.SET_CART_EMPTY)
}

/**
 * Sets the value of the isCartOpen property.
 *
 * @param {boolean} boolean - The new value of the isCartOpen property.
 * @return {undefined} - This function does not return a value.
 */
export const setIsCartOpen = (boolean) =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
