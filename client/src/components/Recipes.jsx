import React, { Component } from 'react'
import './Recipes.css'
import Recipe from './Recipe'
import Search from './Search'
import { AZ, ZA, lowestFirst, highestFirst } from "./Sort"
import Layout from './shared/Layout'
import { getRecipes } from '../services/recipe'

class Recipes extends Component {
  constructor() {
    super()
    this.state = {
      recipes: [],
      filterValue: '',
      filteredrecipes: null,
      selectValue: 'Featured'
    }
  }

  async componentDidMount() {
    const recipes = await getRecipes()
    this.setState({ recipes })
  }

  handleSearchChange = event => {
    const filter = () => {
      const filteredrecipes = this.state.recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(this.state.filterValue.toLowerCase())
      })
      this.setState({ filteredrecipes })
    }
    this.setState({ filterValue: event.target.value }, filter)
  }

  handleSortChange = event => {
    this.setState({ selectValue: event.target.value });
    let input = event.target.value; // a-z
    const { recipes } = this.state;
    switch (input) {
      case "name-ascending":
        this.setState({
          recipes: AZ(recipes)
        });
        break;
      case "name-descending":
        this.setState({
          recipes: ZA(recipes)
        });
        break;
      case "price-ascending":
        this.setState({
          recipes: lowestFirst(recipes)
        });
        break;
      case "price-descending":
        this.setState({
          recipes: highestFirst(recipes)
        });
        break;
      default:
        break
    }
  }

  handleSubmit = event => event.preventDefault()

  render() {
    const recipes = this.state.filteredRecipes ? this.state.filteredRecipes : this.state.recipes
    const RECIPES = recipes.map((recipe, index) =>
      <Recipe _id={recipe._id} name={recipe.name} img={recipe.img} difficulty={recipe.difficulty} cook_time={recipe.cook_time} key={index} />
    )

    return (
      <Layout user={this.props.user}>
        <Search onSubmit={this.handleSubmit} value={this.state.filterValue} onChange={this.handleSearchChange} />
        <form className="sort-container" onSubmit={this.handleSubmit}>
          <label htmlFor="sort">SORT BY:</label>
          <select className="sort" value={this.state.selectValue} onChange={this.handleSortChange}>
            <option className="option" value="name-ascending" >&nbsp; Alphabetically, A-Z &nbsp;</option>
            <option value="name-descending">&nbsp; Alphabetically, Z-A &nbsp;</option>
            {/* <option value="price-ascending">&nbsp; Price, low to high &nbsp;</option>
            <option value="price-descending">&nbsp; Price, high to low &nbsp;</option> */}
          </select>
        </form>
        <div className="recipes">
          { RECIPES }
        </div>
      </Layout>
    )
  }
}

export default Recipes