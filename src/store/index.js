import { createStore, combineReducers } from 'redux'
import { recipesReducer } from './recipes'

const rootReducer = combineReducers({
    recipes: recipesReducer,
})

export default createStore(rootReducer)