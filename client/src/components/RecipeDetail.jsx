import React, { Component } from "react";
import "./RecipeDetail.css";
import Layout from "./shared/Layout";
import { getRecipe, deleteRecipe } from "../services/recipe";
import { Link } from "react-router-dom";

class RecipeDetail extends Component {
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
        // user_id: this.props.user._id,
      },
    };
  }

  async componentDidMount() {
    let { id } = this.props.match.params;
    const recipe = await getRecipe(id);
    this.setState({ recipe });
  }

  handleDelete = async (id) => {
    await deleteRecipe(id)
    this.props.history.push('/')
  }

  render() {
    const { recipe } = this.state;
    const { user } = this.props
    return (
      <Layout user={this.props.user}>
        <div className="recipe-detail">
          <div className="detail">
            <img className="img" src={recipe.img} />
            <div className="name">{recipe.name}</div>
            <div className="course">{recipe.course}</div>
            <div className="difficulty">{recipe.difficulty}</div>
            <div className="cuisine">{recipe.cuisine}</div>
            <div className="preptime">{recipe.preptime}</div>
            <div className="cooktime">{recipe.cooktime}</div>
            <div className="serves">{recipe.serves}</div>
            <div className="ingredients">{recipe.ingredients}</div>
            <div className="instructions">{recipe.instructions}</div>
            {user && recipe.user_id === user._id ?
              <div className="button-container">
                <button className="edit-button">
                  <Link className="edit-link" to={`/recipes/${recipe._id}/edit`}>
                    Edit
                </Link>
                </button>
                <button
                  className="delete-button"
                  onClick={() => this.handleDelete(recipe._id)}
                >
                  Delete
              </button>
              </div>
              :
              <></>
            }
          </div>
        </div>
      </Layout>
    );
  }
}

export default RecipeDetail;
