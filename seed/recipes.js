const db = require("../db");
const Recipe = require("../models/recipe");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const recipes = [
    {
      name: "Classic Burger",
      img:
        "https://images.unsplash.com/photo-1479388891567-3c137b61de97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      course: "Lunch/Dinner",
      cuisine: "American",
      prep_time: "10min",
      cook_time: "5min",
      serves: "4 people",
      difficulty: "MEDIUM",

      ingredients:
        "1 1/2 pounds 80% lean 20% fat ground beef, 1 tbsp Worcestershire sauce, 1 1/2 tsp seasoning salt, 1 tsp garlic powder, 1/2 tsp ground black pepper, 4 slices of cheese, 4 hamburger buns, optional: hamburger toppings - lettuce tomato, onion, pickles, ketchup, mustard, mayo, etc.",

      instructions:
        "Preheat the grill to 375 degrees F (medium-high). In a large bowl, add the beef. Sprinkle evenly with the Worcestershire sauce, seasoning salt, garlic powder, and pepper. Use your hands to mix the ingredients until they are just combined. Divide the meat mixture into fourths. Take 1/4 of the meat mixture and use your hands to press it into the shape of a hamburger patty that is about 3/4 inch thick. Make an indention in the middle of the patty to prevent bulging in the center of the hamburger as it cooks. Repeat with the remaining meat mixture, making 4 hamburgers. Place the burgers on the grill. Cook 4-5 minutes on the first side. Flip the burgers over and cook an additional 4-5 minutes, until the burgers have reached the desired doneness. If adding cheese, lay a slice of cheese on each burger patty about 1 minute before taking the burgers off the grill, so the cheese has a chance to melt. Serve the burgers on hamburger buns with optional hamburger toppings.",
 
      user_id: "5e962c8dd096d212d08ef39c",
    },

    {
      name: "Creamy Tomato Soup",
      img:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      course: "Lunch/Dinner",
      cuisine: "American",
      prep_time: "5min",
      cook_time: "30min",
      serves: "8 people",
      difficulty: "MEDIUM",
      ingredients:
        "1/4 cup (1/2 stick) unsalted butter, 10 sprigs thyme, tied together, 1 medium onion, thinly sliced, 2 garlic cloves, thinly sliced, 1/4 cup tomato paste, 2 28-oz. cans whole tomatoes, 1–2 tsp sugar, divided, 1/4 cup (or more) heavy cream, kosher salt and freshly ground black pepper",

      instructions:
        "Melt butter in a large heavy pot over medium heat. Add thyme, onion, and garlic. Cook until onion is completely soft and translucent, 10–12 minutes.    Increase heat to medium-high; add tomato paste. Continue cooking, stirring often, until paste has begun to caramelize in spots, 5–6 minutes. Add tomatoes with juices, 1 tsp. sugar, and 8 cups water to pot. Increase heat to high; bring to a simmer. Reduce heat to medium. Simmer until flavors meld and soup reduces to about 2 quarts (8 cups), 45–55 minutes. Remove soup from heat; let cool slightly. Discard thyme sprigs. Working in small batches, purée soup in a blender until smooth. Return to pot. Stir in ¼ cup cream. Simmer soup until flavors meld, 10–15 minutes longer. Season to taste with salt, pepper, and remaining 1 tsp. sugar. Add more cream, if desired.",

      user_id: "5e962c8dd096d212d08ef39c",
    },
    {
      name: "Pancakes from Scratch",
      img:
        "https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/51/70/nwoyHKPSAWTjjpcSL5gs_scratch-pancakes-7.jpg",
      course: "Breakfast/Dessert",
      cuisine: "American",
      prep_time: "5min",
      cook_time: "5min",
      serves: "9 6-inch pancakes",
      difficulty: "EASY",

      ingredients:
        "2 cups flour, 3 tbsp sugar, 1/2 tsp salt, 1 tbsp baking powder, 2 eggs, beaten separately before adding to mixture, 1/4 cup butter, melted, 1 3/4 cups milk",

      instructions:
        "Mix the dry items first. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.",
   
     
      user_id: "5e962c8dd096d212d08ef39c",
    },
  ];

  await Recipe.insertMany(recipes);
  console.log("Created recipes!");
};

const run = async () => {
  await main();
  db.close();
};

run();
