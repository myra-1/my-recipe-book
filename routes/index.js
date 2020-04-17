const { Router } = require("express");
const controllers = require("../controllers");
const restrict = require("../helpers");

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));
router.get('/recipes', controllers.getRecipes);
router.post("/sign-up", controllers.signUp);
router.post("/sign-in", controllers.signIn);
router.get("/verify", controllers.verifyUser);
router.post("/change-password", controllers.changePassword);
router.get('/recipes/:id', controllers.getRecipe);
router.post('/recipes', controllers.createRecipe);
router.put('/recipes/:id', restrict, controllers.updateRecipe);
router.delete('/recipes/:id', restrict, controllers.deleteRecipe);

module.exports = router;
