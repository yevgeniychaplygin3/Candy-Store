import { combineReducers } from 'redux'

import productsReducer from './productsReducer'
import cartReducer from './cartReducer'
import { cartVisibilityReducer} from './cartReducer'

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    visibility: cartVisibilityReducer
})

export default rootReducer
