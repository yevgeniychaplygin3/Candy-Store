import { REMOVE_PRODUCT, CartVisibility,  SET_CART_VISIBILITY, ADD_PRODUCT, CHECKOUT_CART} from "./actions";

export const initalCart = [
    {
        "id": 0,
        "name": "",
        "price": 0,
        "inStock": 0,
        "photoUrl": ""
    }
]

function cartReducer(state = initalCart, action)
{
    switch(action.type){
        case ADD_PRODUCT:
            return state.find( p => p.id === action.id) ? 
                state.map( p=> ( p.id === action.id) ? {
                    ...p,
                    id: p.id,
                    name: p.name,
                    pricePerUnit: p.pricePerUnit,
                    inCart: parseInt(p.inCart) + parseInt(action.amount),
                    totalCost: parseFloat(action.price) * (parseInt(p.inCart) + parseFloat(action.amount))
                } : p
                ) 
             : 
            [ ...state, {
                id: action.id,
                name: action.name,
                pricePerUnit: parseFloat(action.price),
                inCart: parseInt(action.amount),
                totalCost: parseFloat(action.price) * parseInt(action.amount)
            }]
        case REMOVE_PRODUCT:
            return state.map( product => (
                product.id === action.id ? 
                {} : product 
            )).filter( p => Object.keys(p).length !== 0 )
        case CHECKOUT_CART:
            return initalCart
        default:
            return state
    }
}

export function cartVisibilityReducer( state = CartVisibility.HIDE_CART, action){
    switch(action.type){
        case SET_CART_VISIBILITY:
            return action.visibility
        case ADD_PRODUCT:
            return CartVisibility.SHOW_CART
        case CHECKOUT_CART:
            return CartVisibility.HIDE_CART
        default:
            return state
    }  
}

export default cartReducer