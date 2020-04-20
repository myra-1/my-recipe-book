import React, { Component } from "react";
import "./RecipeCreateEdit.css";
import { Redirect } from "react-router-dom";
import Layout from "./shared/Layout";
import { getRecipe, updateRecipe } from "../services/recipe";

class RecipeEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {
        name: "",
        img: "",
        cuisine: "",
        difficulty: "",
        course: "",
        preptime: "",
        cooktime: "",
        serves: "",
        ingredients: "",
        instructions: "",
        user_id: this.props.user._id,
      },
      updated: false,
    };
  }

  async componentDidMount() {
    let { id } = this.props.match.params;
    const recipe = await getRecipe(id);
    this.setState({ recipe });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      recipe: {
        ...this.state.recipe,
        [name]: value,
      },
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    let { id } = this.props.match.params;
    const updated = await updateRecipe(id, this.state.recipe);
    this.setState({ updated });
  };

  render() {
    const { recipe, updated } = this.state;

    if (updated) {
      return <Redirect to={`/recipes/${this.props.match.params.id}`} />;
    }

    let divImage = recipe.img;

    return (

      <Layout user={this.props.user}>
        <form className="form" onSubmit={this.handleSubmit}>

          <div className='recipe-items-div'>
            <div className='form-recipe-item'>
              <label for="input-name">Dish Name</label>
              <input
                className="input-name"
                value={recipe.name}
                name="name"
                required
                autoFocus
                onChange={this.handleChange}
              />
            </div>
            <div className='form-recipe-item'>
              <label for="input-cuisine">Cuisine</label>
              <input
                className="input-cuisine"
                value={recipe.cuisine}
                name="cuisine"
                required
                autoFocus
                onChange={this.handleChange}
              />
            </div>
            <div className='form-recipe-item'>
              <label for="input-difficulty">Difficulty</label>
              <input
                className="input-difficulty"
                value={recipe.difficulty}
                name="difficulty"
                required
                autoFocus
                onChange={this.handleChange}
              />
            </div>
            <div className='form-recipe-item'>
              <label for="input-preptime">Prep Time</label>
              <input
                className="input-preptime"
                value={recipe.preptime}
                name="preptime"
                required
                autoFocus
                onChange={this.handleChange}
              />
            </div>
            <div className='form-recipe-item'>
              <label for="input-cooktime">Cook Time</label>
              <input
                className="input-cooktime"
                value={recipe.cooktime}
                name="cooktime"
                required
                autoFocus
                onChange={this.handleChange}
              />
            </div>
            <div className='form-recipe-item'>
              <label for="input-serves">Serves</label>
              <input
                className="input-serves"
                value={recipe.serves}
                name="serves"
                required
                autoFocus
                onChange={this.handleChange}
              />
            </div>
            <div className='form-recipe-item'>
              <label for="input-image-link">Image Link</label>
              <input
                className="input-image-link"
                value={recipe.img}
                name="img"
                required
                onChange={this.handleChange}
              />
            </div>
            <div id="div-image" style={{ backgroundImage: "url(" + divImage + ")" }}>
            </div>
          </div>
          <div className='ingredients-and-instruction-div'>
            <div>
              <label for="textarea-ingredients">Ingredients</label>
              <textarea
                className="textarea-ingredients"
                rows={9}
                cols={60}
                value={recipe.ingredients}
                name="ingredients"
                required
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label for="textarea-instructions">Instructions</label>
              <textarea
                className="textarea-instructions"
                rows={14}
                cols={60}
                value={recipe.instructions}
                name="instructions"
                required
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button type="submit" className="save-button">
            Save
        </button>
        </form>

      </Layout>
    );
  }
}

export default RecipeEdit;
