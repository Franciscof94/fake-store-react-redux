import { combineReducers } from 'redux';
import products from './productReducer'
import view from './viewReducer'

export default combineReducers({
    products,
    view
})

