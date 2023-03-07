import { ADD_PRODUCT, RECEIVE_PRODUCTS, REMOVE_PRODUCT } from "./actions"

export const initalProducts = [
    {
        "id": 0,
        "name": "",
        "price": 0,
        "inStock": 0,
        "photoUrl": ""
    }
]


function productsReducer(state = initalProducts , action)
{
    switch(action.type){
        case RECEIVE_PRODUCTS:
            return action.products
        case ADD_PRODUCT:
            return state.map( product => (
               product.id === action.id ? {
                ...product,
                inStock: parseInt(product.inStock) - parseInt(action.amount)
               } : product
            ))
        case REMOVE_PRODUCT:
            return state.map( product => (
                product.id === action.id ? {
                    ...product,
                    inStock: product.inStock + action.amount
                } : product
            )) 
        default: 
            return state
    }
}

export default productsReducer