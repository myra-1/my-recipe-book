import React, { Component } from "react";
import "./RecipeCreate.css";
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
          <h1>Create your own Recipe</h1>
          <img className="chef-img" src="https://i.imgur.com/7cGpFC9.png"></img>
        </div>
        <form className="create-form" onSubmit={this.handleSubmit}>
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
            className="input-image-link"
            placeholder="Image Link"
            value={recipe.img}
            name="img"
            required
            onChange={this.handleChange}
          />
          <input
            className="input-cuisine"
            placeholder="Cuisine"
            value={recipe.cuisine}
            name="cuisine"
            required
            onChange={this.handleChange}
          />
          <input
            className="input-difficulty"
            placeholder="Difficulty"
            value={recipe.difficulty}
            name="difficulty"
            required
            onChange={this.handleChange}
          />
          <input
            className="input-course"
            placeholder="Course"
            value={recipe.course}
            name="course"
            required
            onChange={this.handleChange}
          />
          <input
            className="input-preptime"
            placeholder="Preptime"
            value={recipe.prep_time}
            name="preptime"
            required
            onChange={this.handleChange}
          />{" "}
          <input
            className="input-cooktime"
            placeholder="Cooktime"
            value={recipe.cook_time}
            name="cooktime"
            required
            onChange={this.handleChange}
          />
          <input
            className="input-serves"
            placeholder="Serves"
            value={recipe.serves}
            name="serves"
            required
            onChange={this.handleChange}
          />
          <textarea
            className="textarea-ingredients"
            rows={5}
            placeholder="Ingredients"
            value={recipe.ingredients}
            name="ingredients"
            required
            onChange={this.handleChange}
          />
          <textarea
            className="textarea-instructions"
            rows={10}
            placeholder="Instruction"
            value={recipe.instructions}
            name="instructions"
            required
            onChange={this.handleChange}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </Layout>
    );
  }
}

export default RecipeCreate;
