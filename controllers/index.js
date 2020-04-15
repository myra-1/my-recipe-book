const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Recipe = require("../models/recipe");
const db = require("../db");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const SALT_ROUNDS = 11;
const TOKEN_KEY = "3e7AOpb340PwMz891JKuvkslW74oPZd";

const signUp = async (req, res) => {
  try {
    const { username, password } = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await new User({
      username,
      password_digest,
    });

    await user.save();

    const payload = {
      id: user._id,
      username: user.username,
    };

    const token = jwt.sign(payload, TOKEN_KEY);
    return res.status(201).json({ user, token });
  } catch (error) {
    console.log(
      "You made it to the signUp controller, but there was an error :("
    );
    return res.status(400).json({ error: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        id: user._id,
        username: user.username,
      };

      const token = jwt.sign(payload, TOKEN_KEY);
      return res.status(201).json({ user, token });
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const verifyUser = (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, TOKEN_KEY);
    res.json({ user });
  } catch (e) {
    res.status(401).send("Not Authorized");
  }
};

const changePassword = async (req, res) => {};

const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    if (recipe) {
      return res.json(recipe);
    }
    res.status(404).json({ message: "Recipe not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createRecipe = async (req, res) => {
  try {
    const recipe = await new Recipe(req.body);
    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateRecipe = async (req, res) => {
  const { id } = req.params;
  await Recipe.findByIdAndUpdate(
    id,
    req.body,
    { new: true },
    (error, recipe) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      if (!recipe) {
        return res.status(404).json({ message: "Recipe not found!" });
      }
      res.status(200).json(recipe);
    }
  );
};


const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Recipe.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Recipe deleted");
    }
    throw new Error("Recipe not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  signUp,
  signIn,
  verifyUser,
  changePassword,
  createRecipe,
  getRecipes,
  getRecipe,
  updateRecipe,
  deleteRecipe,
};

