import React, { Component } from "react";
import "./RecipeCreateEdit.css";
import Layout from "./shared/Layout";
import { Redirect } from "react-router-dom";
import { createRecipe } from "../services/recipe";
import { verifyUser } from "../services/user";

class RecipeCreate extends Component {
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
      created: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ recipe: { user_id: this.props.user._id } });
  };

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
    const created = await createRecipe(this.state.recipe);
    this.setState({ created });
  };

  render() {
    const { recipe, created } = this.state;

    if (created) {
      return <Redirect to={`/recipes`} />;
    }
    return (
      <Layout user={this.props.user}>
        <div className="title">
          <h2>create your own recipe</h2>
          <img className="chef-img" src="https://i.imgur.com/7cGpFC9.png"></img>
        </div>
        
        <form onSubmit={this.handleSubmit}>
          <div className="form">
            <div>
              <label for="input-image-link">Image Link</label>
              <input
                className="input-image-link"
                value={recipe.img}
                name="img"
                required
                onChange={this.handleChange}
            />
            </div>
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
            <label for="textarea-ingredients">Ingredients</label>
            <textarea
              className="textarea-ingredients"
              rows={10}
              cols={78}
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
              rows={10}
              cols={78}
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

export default RecipeCreate;
