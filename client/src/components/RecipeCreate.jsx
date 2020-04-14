import React, { Component } from 'react'
import './RecipeCreate.css'
import Layout from './shared/Layout'
import { Redirect } from 'react-router-dom'
import { createRecipe } from '../services/recipe'

class RecipeCreate extends Component {
    constructor() {
        super()
        this.state = {
            recipe: {
                name: '',
                img: '',
                ingredients: '',
                instructions: ''
            },
            created: false
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            recipe: {
                ...this.state.recipe,
                [name]: value
            }
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const created = await createRecipe(this.state.recipe)
        this.setState({ created })
    }

    render() {
        const { recipe, created } = this.state

        if (created) {
            return <Redirect to={`/recipes`} />
        }
        return (
            <Layout user={this.props.user}>
                <form className="create-form" onSubmit={this.handleSubmit}>
                    <input
                        className="input-name"
                        placeholder='Name'
                        value={recipe.name}
                        name='name'
                        required
                        autoFocus
                        onChange={this.handleChange}
                    />
                    {/* <input
                        className="input-price"
                        placeholder='Price'
                        value={product.price}
                        name='price'
                        required
                        onChange={this.handleChange}
                    /> */}
                    <input
                        className="input-image-link"
                        placeholder='Image Link'
                        value={recipe.img}
                        name='img'
                        required
                        onChange={this.handleChange}
                    />
                    <textarea
                        className="textarea-description"
                        // rows={10}
                        placeholder='Ingredients'
                        value={recipe.ingredients}
                        name='ingredients'
                        required
                        onChange={this.handleChange}
                    />
                    <textarea
                        className="textarea-description"
                        // rows={10}
                        placeholder='Instruction'
                        value={recipe.instructions}
                        name='instructions'
                        required
                        onChange={this.handleChange}
                    />
                
                    <button type='submit' className="submit-button">Submit</button>
                </form>
            </Layout>
        )
    }
}

export default RecipeCreate