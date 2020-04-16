import React, { Component } from "react";
import "./RecipeEdit.css";
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

    return (
      <Layout user={this.props.user}>
        <div className="recipe-edit">
          <div className="image-container">
            <img
              className="edit-recipe-image"
              src={recipe.img}
              alt={recipe.name}
            />
            <form onSubmit={this.handleSubmit}>
              <input
                className="edit-input-image-link"
                placeholder="Image Link"
                value={recipe.img}
                name="img"
                required
                onChange={this.handleChange}
              />
            </form>
          </div>
          <form className="edit-form" onSubmit={this.handleSubmit}>
            <input
              className="input-name"
              placeholder="Name"
              value={recipe.name}
              name="name"
              required
              autoFocus
              onChange={this.handleChange}
            />
            <input
              className="input-cuisine"
              placeholder="Cuisine"
              value={recipe.name}
              name="cuisine"
              required
              autoFocus
              onChange={this.handleChange}
            />
            <input
              className="input-difficulty"
              placeholder="Difficulty"
              value={recipe.difficulty}
              name="difficulty"
              required
              autoFocus
              onChange={this.handleChange}
            />
            <input
              className="input-preptime"
              placeholder="Prep-time"
              value={recipe.preptime}
              name="preptime"
              required
              autoFocus
              onChange={this.handleChange}
            />
            <input
              className="input-cooktime"
              placeholder="Cook-time"
              value={recipe.cooktime}
              name="cooktime"
              required
              autoFocus
              onChange={this.handleChange}
            />
            <input
              className="input-serves"
              placeholder="Serves"
              value={recipe.serves}
              name="serves"
              required
              autoFocus
              onChange={this.handleChange}
            />
            <textarea
              className="textarea-ingredients"
              // rows={10}
              // cols={78}
              placeholder="Ingredients"
              value={recipe.ingredients}
              name="ingredients"
              required
              onChange={this.handleChange}
            />
            <textarea
              className="textarea-instructions"
              // rows={10}
              // cols={78}
              placeholder="Instructions"
              value={recipe.instructions}
              name="instructions"
              required
              onChange={this.handleChange}
            />
            <button type="submit" className="save-button">
              Save
            </button>
          </form>
        </div>
      </Layout>
    );
  }
}

export default RecipeEdit;
