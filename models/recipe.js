const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Recipe = new Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    course: { type: String, required: false },
    cuisine: { type: String, required: false },
    difficulty: { type: String, required: false },
    preptime: { type: String, required: false },
    cooktime: { type: String, required: false },
    serves: { type: String, required: true },
    ingredients: { type: String, required: false },
    instructions: { type: String, required: false },
    user_id: { type: Schema.Types.ObjectId, ref: 'user', required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("recipes", Recipe);
