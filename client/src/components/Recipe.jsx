import React from "react";
import "./Recipe.css";
import { Link } from "react-router-dom";
const Recipe = (props) => {
  return (
    <>
      <Link className="recipe" to={`/recipes/${props._id}`}>
        <img className="recipe-image" src={props.img} alt={props.name} />
        <div className="recipe-name">{props.name}</div>
        <span className="cook-time difficulty">
          {props.cook_time} {props.difficulty}
        </span>
      </Link>
    </>
  );
};
export default Recipe;
