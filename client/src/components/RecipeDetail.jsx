import React, { Component } from 'react'
import './RecipeDetail.css'
import Layout from './shared/Layout'
import { getRecipe, deleteRecipe } from '../services/recipe'
import { Link } from 'react-router-dom'

class RecipeDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipe: {
                name: '',
                img: '',
                ingredients: '',
                instructions: '',
            }
        }
    }

    async componentDidMount() {
        let { id } = this.props.match.params
        const recipe = await getRecipe(id)
        this.setState({ recipe })
    }

    render() {
        const { recipe } = this.state
        return (
            <Layout user={this.props.user}>
                <div className="recipe-detail">
                    <img className="recipe-detail-image" src={recipe.img} alt={recipe.name} />
                    <div className="detail">
                        <div className="name">{recipe.name}</div>
                        <div className="description">{recipe.description}</div>
                        <div className="button-container">
                        <button className="edit-button"><Link className="edit-link" to={`/recipes/${recipe._id}/edit`}>Edit</Link></button>
                            <button className="delete-button" onClick={() => deleteRecipe(recipe._id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default RecipeDetail
