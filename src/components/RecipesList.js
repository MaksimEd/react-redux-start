import React from 'react'
import Recipe from './Recipe'
import { connect } from 'react-redux'
import { addRecipe } from '../store/recipes'

class RecipesList extends React.Component {
    render () {
        return (
            <div>
                <div onClick={this.props.addRecipe}>
                    Добавить
                </div>
                <table>
                    <thead>
                    <tr>
                        <td>Номер</td>
                        <td>Заголовок</td>
                        <td>Описание</td>
                        <td>Цена</td>
                        <td>Удалить</td>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.recipes.map(recipe =>
                            <Recipe key={recipe.id} recipe={recipe} />
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    recipes: state.recipes,
})

const mapDispatchToProps = {
    addRecipe
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList)