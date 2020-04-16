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
        ingredients: "",
        instructions: "",
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
            <textarea
              className="textarea-description"
              rows={10}
              cols={78}
              placeholder="Description"
              value={recipe.description}
              name="description"
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
