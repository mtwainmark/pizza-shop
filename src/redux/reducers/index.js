import { combineReducers } from 'redux';
import filtersReducer from './filters'
import pizzasReducer from './pizzas'
import cartReducer from './cart'

const reducers = combineReducers({
    pizzas: pizzasReducer,
    filters: filtersReducer,
    cart: cartReducer,
})

export default reducers