import React from 'react'
import {removeRecipe, updateRecipe} from "../store/recipes"
import { connect } from 'react-redux'

class Recipe extends React.Component {
    handleChange = field => e => {
        this.props.update({ [field]: e.target.value })
    }

    render () {
        return (
            <tr style={{cursor: "pointer"}}>
                <td>
                    {this.props.recipe.id}
                </td>
                <td>
                    <input value={this.props.recipe.title} onChange={this.handleChange("title")} />
                </td>
                <td>
                    <textarea value={this.props.recipe.content} cols="50" rows="2" onChange={this.handleChange("content")} />
                </td>
                <td>
                    <input value={this.props.recipe.price} onChange={this.handleChange("price")} />
                </td>
                <td onClick={this.props.remove}>x</td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    remove: () => dispatch(removeRecipe(ownProps.recipe.id)),
    update: changeset => dispatch(updateRecipe(ownProps.recipe.id, changeset)),
})

export default connect(null, mapDispatchToProps)(Recipe)