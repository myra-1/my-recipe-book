import React from "react";
import "./Recipe.css";
import { Link } from "react-router-dom";
const Recipe = (props) => {
  return (
    <>
      <Link className="recipe" to={`/recipes/${props._id}`}>
        <img className="recipe-image" src={props.img} alt={props.name} />
        <div className="recipe-name">{props.name}</div>
        <div className="border-style">
          <p className="cook-time">{props.cooktime}</p>
          <p className="difficulty">{props.difficulty}</p>
        </div>
      </Link>
    </>
  );
};
export default Recipe;
