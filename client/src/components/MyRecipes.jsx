import React, { Component } from 'react'
import Recipe from './Recipe'
import { getRecipes } from '../services/recipe'
import Layout from './shared/Layout'

class MyRecipes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    }
    console.log(this.state.recipes)
  }

  async componentDidMount() {
    const recipes = await getRecipes()
    this.setState({ recipes })
    console.log(this.state.recipes)
  }

  render() {
    const recipes = this.state.recipes.filter(recipe => (
      recipe.user_id === this.props.user._id
    )).map(((recipe, index) =>
      <Recipe _id={recipe._id} name={recipe.name} img={recipe.img} difficulty={recipe.difficulty} cooktime={recipe.cooktime} key={index} />
    ))
    return (
      <Layout user={this.props.user}>
       
        <form className="sort-container" onSubmit={this.handleSubmit}>
          <label htmlFor="sort">SORT BY:</label>
          <select className="sort" value={this.state.selectValue} onChange={this.handleSortChange}>
            <option className="option" value="name-ascending" >&nbsp; Alphabetically, A-Z &nbsp;</option>
            <option value="name-descending">&nbsp; Alphabetically, Z-A &nbsp;</option>
          </select>
        </form>

        <div className="recipes">
          {recipes}
        </div>
      </Layout>
    )
  }
}
export default MyRecipes;
