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
      },
    };
  }

  async componentDidMount() {
    let { id } = this.props.match.params;
    const recipe = await getRecipe(id);
    this.setState({ recipe });
  }

  handleDelete = async (id) => {
    await deleteRecipe(id);
    this.props.history.push("/");
  };

  render() {
    const { recipe } = this.state;
    const { user } = this.props;
    return (
      <Layout user={this.props.user}>
        <div className="recipe-detail-page">
          <div className="detail">
            <div className="aside">
              <div className="aside-top">
                <div className="name">{recipe.name}</div>
                <img className="img" src={recipe.img} />
              </div>
              <div className="aside-bottom">
                <div className="category-container">
                  <div className="category course">{recipe.course}</div>
                  <div className="category difficulty">{recipe.difficulty}</div>
                  <div className="category cuisine">{recipe.cuisine}</div>
                  <div className="category preptime">{recipe.preptime}</div>
                  <div className="category cooktime">{recipe.cooktime}</div>
                  <div className="category serves">{recipe.serves}</div>
                </div>
                <div className="edit-container">
                  {user && recipe.user_id === user._id ? (
                    <div className="button-container">
                      <button className="edit-button">
                        <Link
                          className="edit-link"
                          to={`/recipes/${recipe._id}/edit`}
                        >
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
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <div className="main">
              <div className="ingredients">
                <h2>Ingredients:</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${recipe.ingredients.replace(
                      /(\,\s+)/g,
                      "<br />"
                    )}`,
                  }}
                ></div>
              </div>

              <div className="instructions">
                <h2>Instructions:</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${recipe.instructions.replace(
                      /(\.\s+)/g,
                      "$1<br />"
                    )}`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default RecipeDetail;
