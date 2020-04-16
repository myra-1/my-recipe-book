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
      preptime: "10min",
      cooktime: "5min",
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
      preptime: "5min",
      cooktime: "30min",
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
      preptime: "5min",
      cooktime: "5min",
      serves: "9 6-inch pancakes",
      difficulty: "EASY",

      ingredients:
        "2 cups flour, 3 tbsp sugar, 1/2 tsp salt, 1 tbsp baking powder, 2 eggs, beaten separately before adding to mixture, 1/4 cup butter, melted, 1 3/4 cups milk",

      instructions:
        "Mix the dry items first. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.",

      user_id: "5e962c8dd096d212d08ef39c",
    },

    {
      name: "Keto Chicken Parmesan",
      img: "https://i.imgur.com/gGQ19ni.jpg",
      course: "Lunch/Dinner",
      cuisine: "Italian",
      preptime: "10min",
      cooktime: "55mins",
      serves: "7 servings",
      difficulty: "HARD",

      ingredients:
        "4 boneless skinless chicken breasts, Kosher salt, Freshly ground black pepper, 1 c. almond flour, 3 large eggs, beaten, 3 c. freshly grated Parmesan, plus more for serving, 2 tsp. garlic powder, 1 tsp. onion powder , 2 tsp. dried oregano, Vegetable oil, 3/4 c. low-carb sugar-free tomato sauce, 1 1/2 c. shredded mozzarella, Fresh basil leaves, for topping",
      instructions:
        "Preheat oven to 400°. Using a sharp knife, cut chicken breasts in half crosswise. Season chicken on both sides with salt and pepper. Place eggs and almond flour in 2 separate shallow bowls. In a third shallow bowl, combine Parmesan, garlic powder, onion powder, and oregano. Season with salt and pepper. Working with one at a time, dip chicken cutlets into almond flour, then eggs, and then Parmesan mixture, pressing to coat.  In a large skillet over medium heat, heat 2 tablespoons oil. Add chicken and cook until golden and cooked through, 2 to 3 minutes per side. Work in batches as necessary, adding more oil when needed. Transfer fried cutlets to a 9″-x-13″ baking dish, evenly spread tomato sauce on each cutlet and top with mozzarella.  Bake until cheese is melty, 10 to 12 minutes. If desired, broil until cheese is golden, 3 minutes. Top with basil and more Parmesan before serving.",
      user_id: "5e9613c7156f35421c1db437",
    },
    {
      name: "Chicken Linguini Alfredo",
      img: "https://i.imgur.com/97Cna6S.jpg",
      course: "Lunch/Dinner",
      cuisine: "Italian",
      preptime: "10min",
      cooktime: "20min",
      serves: "2 servings",
      difficulty: "MEDIUM",

      ingredients:
        "2 boneless skinless chicken breast halves, cut into thin strips, 2 teaspoons cajun seasoning, 2 tablespoons butter or 2 tablespoons margarine, 1 -2 cup heavy cream, 1⁄4 teaspoon dried basil, 1⁄4 teaspoon lemon pepper seasoning, 1⁄4 teaspoon salt, 1⁄8 teaspoon garlic powder, 1⁄8 teaspoon pepper, 4 ounces linguine or 4 ounces fettuccine pasta, cooked and drained grated parmesan cheese, to taste",

      instructions:
        "Place chicken an Cajun seasoning in a bowl or resealable plastic bag; toss or shake to coat. In a large skillet over medium heat, saute chicken in butter until almost tender, about 5 to 7 minutes. Reduce heat. Add cream and seasoning; heat through. Add pasta and toss; heat through. Sprinkle Parmesan cheese if desired. Adjust the Cajun seasoning if you like it spicier.",

      user_id: "5e9613c7156f35421c1db437",
    },
    ///////////////
    {
      name: "Chicken & Sausage Gumbo",
      img: "https://i.imgur.com/bhJVzhPl.jpg",
      course: "Lunch/Dinner",
      cuisine: "Cajun",
      preptime: "15min",
      cooktime: "60min",
      serves: "3 servings",
      difficulty: "HARD",

      ingredients:
        "1 cup vegetable oil, 1 cup all-purpose flour, 1 large onion, chopped, 1 large green bell pepper, chopped, 2 celery stalks, chopped  , 1 pound andouille or smoked sausage, sliced 1/4 inch thick, 4 cloves garlic, minced salt and pepper , Creole seasoning, 6 cups chicken broth, 1 bay leaf, 1 rotisserie chicken, boned and shredded",

      instructions:
        "Heat the oil in a Dutch oven over medium heat. When hot, whisk in flour. Continue whisking until the roux has cooked to the color of chocolate milk, 8 to 10 minutes. Be careful not to burn the roux. If you see black specks in the mixture, start over. Stir onion, bell pepper, celery, and sausage into the roux; cook 5 minutes. Stir in the garlic and cook another 5 minutes. Season with salt, pepper, and Creole seasoning; blend thoroughly. Pour in the chicken broth and add the bay leaf. Bring to a boil over high heat, then reduce heat to medium-low, and simmer, uncovered, for 1 hour, stirring occasionally. Stir in the chicken, and simmer 1 hour more. Skim off any foam that floats to the top during the last hour.",

      user_id: "5e9622578510654fb1a81b92",
    },

    {
      name: "Peach Cobbler",
      img: "https://i.imgur.com/m2aOZLLl.jpg",
      course: "Dessert",
      cuisine: "American",
      preptime: "10min",
      cooktime: "45min",
      serves: "5 servings",
      difficulty: "MEDIUM",

      ingredients:
        "8 large peaches, pit removed and thinly sliced, 1 1/4 c. granulated sugar, divided, 1 tsp. ground cinnamon, 1/2 tsp. ground ginger, 1 tsp. kosher salt, divided Juice of 1/2 lemon, 1 c. all-purpose flour, 1 tsp. baking soda, 1/2 c. (1 stick) melted butter,3/4 c. buttermilk, Coarse sugar, for sprinkling Vanilla ice cream, for serving",

      instructions:
        "Preheat oven to 350°. In a large bowl, combine peaches, 1/4 cup sugar, cinnamon, ginger, 1/2 teaspoon salt, and lemon juice. In another large bowl, whisk together flour, remaining 1 cup sugar, baking soda, and remaining 1/2 teaspoon salt. Add melted butter and buttermilk and whisk to combine. Pour peaches into a large baking dish and spread batter on top, then sprinkle with coarse sugar. Bake until golden and bubbling, 45 minutes. Let cool 10 minutes before serving with ice cream.",

      user_id: "5e9622578510654fb1a81b92",
    },

    {
      name: "Baked Macaroni & Cheese",
      img: "https://i.imgur.com/N9oNQ3Pl.jpg",
      course: "Dessert",
      cuisine: "American",
      preptime: "10min",
      cooktime: "45min",
      serves: "5 servings",
      difficulty: "MEDIUM",

      ingredients:
        "2 cups elbow macaroni (uncooked), 3 tablespoons butter or margarine, 1/4 cup all-purpose flour, 1/4 cup green onion (finely chopped), 1 teaspoon salt, 1/2 teaspoon dry mustard, 1/8 teaspoon pepper, 2 1/2 cups milk, 1 10-ounce package frozen broccoli (chopped and steamed until just tender and drained), 2 cups cooked ham (cubed), 1 cup shredded sharp cheddar cheese, 1/2 cup dry bread crumbs (tossed with 1 tablespoon melted butter)",

      instructions:
        "Gather the ingredients. Preheat the oven to 350 F. Butter a shallow 2-quart casserole. Cook macaroni according to package directions; drain and set aside In a medium saucepan, melt 3 tablespoons butter over low heat. Add flour, green onion, salt, mustard, and pepper; stir until well blended. Gradually stir in milk until blended. Bring to a boil; cook, stirring constantly, until mixture is thickened and bubbly, about 2 minutes. Stir in the cooked broccoli, macaroni, ham, and cheese. Transfer mixture to the prepared casserole. Sprinkle buttered bread crumbs over completed casserole. Bake the casserole recipe in the preheated oven for 30 minutes, or until golden brown.",

      user_id: "5e9622578510654fb1a81b92",
    },

    {
      name: "Crawfish Boil",
      img: "https://i.imgur.com/64IQSvG.jpg",
      course: "Lunch/Dinner",
      cuisine: "Cajun",
      preptime: "20min",
      cooktime: "50min",
      serves: "10 servings",
      difficulty: "HARD",

      ingredients:
        "1 tablespoon whole black peppercorns, 1 tablespoon whole coriander seeds, 2 tablespoons whole cloves, 1 1/2 tablespoons whole allspice, 5 gallons water, 1 pound kosher salt, 4 tablespoons cayenne pepper, 2 tablespoons garlic powder, 2 tablespoons paprika, 1 tablespoon onion powder, 1 tablespoon dried thyme, 1 tablespoon dried oregano, 1 tablespoon dry mustard, 1 tablespoon dried dill weed, 6 bay leaves crumbled, 10 pounds live crawfish, 3 pounds small red potatoes, cut in 1/2, if larger than 2-inches in diameter, 8 ears corn halved, 2 heads garlic, unpeeled, but separated, 1 pound andouille sausage, cut into 1-inch pieces",

      instructions:
        "Place the peppercorns, coriander, clove, and allspice into a spice grinder and grind for 10 to 15 seconds. Fill a 40-quart pot with 5 gallons of water and add the freshly ground spices, salt, cayenne pepper, garlic powder, paprika, onion powder, thyme, oregano, dry mustard, dill weed, and bay leaves. Cover and bring to a boil over high heat, approximately 40 minutes. Rinse the crawfish thoroughly in the bag in which they arrived to remove excess dirt and mud. Put the crawfish in a large container and fill with cool water. Stir to remove dirt from the crawfish. Transfer small batches of crawfish to a colander and rinse under cool running water. Pick out any debris or dead crawfish. Once all crawfish have been rinsed, discard dirty water, and return the crawfish to the container. Repeat this process 6 to 8 times, or until the water is clear. Once the seasoned water comes to a boil, add the potatoes, corn, garlic, and sausage. Cover and cook for 10 minutes. Add the crawfish, cover, and cook for 3 minutes. Turn off the heat and allow the pot to sit, covered, for 10 minutes. Drain well and serve immediately.",

      user_id: "5e9613c7156f35421c1db437",
    },

    {
      name: "Gator Nuggets",
      img: "https://i.imgur.com/JsCiqXa.jpg",
      course: "Lunch/Dinner",
      cuisine: "Southern",
      preptime: "30min",
      cooktime: "30min",
      serves: "7 servings",
      difficulty: "MEDIUM",

      ingredients:
        "2 pounds alligator meat, cut into bite-size pieces, 2 tablespoons vinegarsalt and pepper to taste, oil for frying, 1/4 cup all-purpose flour, 1 cup cornmeal, 2 tablespoons garlic powder, 1/2 teaspoon cayenne pepper, 2 teaspoons black pepper, Optional Dipping Sauce: 3 tablespoons Mayonnaise, 2 teaspoons prepared horseradish1 tablespoon brown mustard, 1 tablespoon red wine vinegar.",

      instructions:
        "Place alligator meat in a medium bowl, and mix with vinegar, salt, and pepper. Cover, and refrigerate about 10 minutes. Pour oil into a large skillet to a depth of 1 inch, and heat over a medium-high flame. Add to a large resealable bag the flour, cornmeal, garlic powder, cayenne pepper, and black pepper. Squeeze off excess liquid from meat, and add one handful of meat to the resealable bag. Shake to coat. Remove meat, shake off excess flour, and set on a plate. Repeat with remaining meat. When oil is hot, place meat pieces into oil, being careful not to overcrowd. Fry until golden brown, about 3 minutes. Remove to paper towels, and serve hot. To prepare dipping sauce, mix together in a small bowl the mayonnaise, horseradish, brown mustard, and red wine vinegar.",

      user_id: "5e9613c7156f35421c1db437",
    },

    {
      name: "Jamaican Oxtail Stew",
      img: "https://i.imgur.com/WdbhMtD.jpg",
      course: "Lunch/Dinner",
      cuisine: "Caribbean",
      preptime: "30min",
      cooktime: "120min",
      serves: "10 servings",
      difficulty: "HARD",

      ingredients:
        "2 kg oxtail stew, 1 can broad beans (lima beans), 1 tbsp salt or to taste, ½ tsp black pepper, 1 tbsp sugar, 1 - 2 tbsp soya sauce msg-free, 1 tbsp worcestershire sauce msg-free, 2 tbsp ketchup, 1 tsp paprika, 1 tsp ginger powder, ½ tsp scotch bonnet pepper to taste, 1 tsp onion powder, 1 tsp garlic powder, 3 sprigs thyme, 3 stalks scallion, 1 medium onion chopped, 6 cloves garlic crushed, 1 small tomato diced, ¼ large bell pepper chopped, 6-8 pimento seeds, 1 tsp cooking oil",

      instructions:
        "In a large bowl, rinse oxtail pieces in vinegar, lime or lemon juice then drain completely. Season the oxtail with salt, black pepper, paprika, allspice, onion powder, garlic powder, ginger powder, 1 tablespoon soya sauce and worcestershire sauce. Thoroughly rub the seasoning into the oxtail by hand or using a large utensil. Prepare (cut) fresh herbs and spices (onion, garlic, thyme, tomato, scotch bonnet pepper, scallion etc.) then divide them into two portions. Add half the portion to the oxtail and rub in well. Cover and let marinate for 6 - 8 hours or move immediately to the next step. In a large skillet, heat cooking oil on medium heat. Add 1 tablespoon brown sugar, stirring quickly and thoroughly for approximately 15 seconds until sugar melts. Immediately add the seasoned oxtail and allow each side of the meat to brown for 1 - 2 minutes. Using the same bowl used to season the oxtail, add 1 tbsp ketchup and 1 cup water. Mix well. When both sides of oxtail have browned, add the ketchup mixture, stir the pot then cover and cook for 2 minutes. Next, add enough water to cover the meat. Stir the pot then cover and let cook on high heat for 2 ½ to 3 hours. Remember to stir the pot every 10 minutes. Ensure there is enough water to cover the meat, topping it up each time it runs low until fully cooked. When the oxtail stew is fully cooked (tender), add the broad beans, 1 tbsp ketchup, the second portion of chopped seasoning and 1 cup boiling water. If the oxtail stew isn't brown enough, add 1/2 to 1 tablespoon soya sauce and stir. Cover and cook on medium-high heat for a further 8-10 minutes. Check the gravy for desired consistency and taste. If the gravy is too thin, leave the pot uncovered to allow the gravy to thicken (approximately 5 minutes). OR - add 1 tsp. cornstarch diluted in 2 tablespoons water to thicken the gravy. If your sauce needs more salt, you can add a pinch more (to taste), stir the pot and let simmer for 5 minutes. Bless up and enjoy it!",

      user_id: "5e9613c7156f35421c1db437",
    },

    {
      name: "Cookie Fries",
      img: "https://i.imgur.com/FaOJ9sN.jpg",
      course: "Dessert",
      cuisine: "American",
      preptime: "10min",
      cooktime: "15min",
      serves: "10 servings",
      difficulty: "EASY",

      ingredients:
        "1 (16.5-oz.) log refrigerated sugar cookie dough, 1/4 c. all-purpose flour, 1/4 c. mini chocolate chips, 1/4 c. rainbow sprinkles, 1/4 c. cinnamon sugar, 2 tbsp. granulated sugar",

      instructions:
        "Preheat oven to 350° and line two large baking sheets with parchment paper. In a large mixing bowl using your hands, combine cookie dough and flour until thoroughly incorporated. Divide dough between three medium bowls. Stir mini chocolate chips into one bowl, rainbow sprinkles into another, and cinnamon sugar into the third. Fold each mix-in into dough until combined. Roll dough out to 1/4”-thick. Using a fluted pastry cutter wheel, cut dough into 1-thick strips, then cut strips crosswise to form 4 fries. Sprinkle with granulated sugar and transfer to prepared baking sheets. Freeze 30 minutes. Bake for 12 to 15 minutes, or until cookies are starting to turn golden around the edges. Let it cool completely.",

      user_id: "5e9613c7156f35421c1db437",
    },
  ];

  https: await Recipe.insertMany(recipes);
  console.log("Created recipes!");
};

const run = async () => {
  await main();
  db.close();
};

run();
