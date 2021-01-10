import { combineReducers } from 'redux';
import filtersReducer from './filters'
import pizzasReducer from './pizzas'


const reducers = combineReducers({
    pizzas: pizzasReducer,
    filters: filtersReducer
})

export default reducers