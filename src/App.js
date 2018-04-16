import React from 'react'
import RecipesList from './components/RecipesList'
import store from './store'
import { Provider } from 'react-redux'

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <RecipesList />
            </Provider>
        )
    }
}