module.exports = (req, res, next) => {
    const jwt = require('jsonwebtoken')
    const TOKEN_KEY = '3e7AOpb340PwMz891JKuvkslW74oPZd'
    try {
        const token = req.headers.authorization.split(' ')[1]
        const data = jwt.verify(token, TOKEN_KEY)
        res.locals.user = data
        next()
    } catch (error) {
        console.log(error)
        res.status(403).send('Unauthorized')
    }
}