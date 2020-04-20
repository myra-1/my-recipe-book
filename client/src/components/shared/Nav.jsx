import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
const authenticatedOptions = (
  <>
    <NavLink className="link" to="/recipes">
      My Recipes
    </NavLink>
    <NavLink className="link" to="/add-recipe">
      Add Recipe
    </NavLink>
    <NavLink className="link" to="/sign-out">
      Sign Out
    </NavLink>
  </>
);
const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink className="link" to="/sign-in">
      Sign In
    </NavLink>
  </>
);

const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav">
        <div className="logo">
          <NavLink className="heading" to="/">
            <span>My</span><span>Recipe</span><span>Book</span>
          </NavLink>
          <img
            className="salad-bowl"
            src="https://i.imgur.com/yGz0wMf.png"
            alt="salad bowl"
          />
        </div>
        <div className="links">
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  );
};
export default Nav;
