const { Router } = require('express')
const controllers = require('../controllers')
const restrict = require('../helpers')

const router = Router()

router.get('/', (req, res) => res.send('This is the api root!'))

router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)
router.get('/verify', controllers.verifyUser)
router.post('/change-password', controllers.changePassword)

// router.get('/users', controllers.users)

// router.get('/my-recipes', restrict, controllers.getMyRecipes)
// router.get('/my-recipes/:id', restrict, controllers.getMyRecipe)

router.get('/recipes', restrict, controllers.getRecipes)
router.get('/recipes/:id', restrict, controllers.getRecipe)
router.post('/recipes', restrict, controllers.createRecipe)
router.put('/recipes/:id', restrict, controllers.updateRecipe)
router.delete('/recipes/:id', restrict, controllers.deleteRecipe)

module.exports = router