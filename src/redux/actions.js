export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS"
export const ADD_PRODUCT = "ADD_PRODUCT"
export const REMOVE_PRODUCT = "REMOVE_PRODUCT"
export const SET_CART_VISIBILITY = "SET_CART_VISIBILITY"
export const CHECKOUT_CART = "CHECKOUT_CART"

export const CartVisibility = {
    SHOW_CART: "SHOW_CART",
    HIDE_CART: "HIDE_CART"
}

//  
//  {type: PRODUCTS, products { list of products } }
// 
export function receiveProducts(products){
    return {type: RECEIVE_PRODUCTS, products}
} 

export function addProduct(id, amount, name, price){
    return {type: ADD_PRODUCT, id, amount, name, price}
}


export function removeProduct(id, amount){
    return {type: REMOVE_PRODUCT, id, amount}
}

export function checkoutCart(products){
    return {type: CHECKOUT_CART, products}
}

//  
//  {type: SET_CART_VISIBILITY, visibility: CartVisibility }
// 

export function cartVisiblity(visibility){
    return {type: SET_CART_VISIBILITY, visibility}
}