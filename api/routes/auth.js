const passport = require('passport')
const jwt = require('jsonwebtoken')
const { Router } = require('express')
const routes = Router()

const createdToken = (user) => {
    const email = user.get('email'),
    name = user.get('name'),
    id = user.get('id'),
    role_id = user.get('role_id');
    const exp = Math.ceil(Date.now()/1000 + 3600)
    return {
        id,
        name,
        email,
        role_id,
        exp
    }
}
// const createToken = 
routes.post('/login', (req, res, next) => {
    passport.authenticate('local', {session : false}, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                messsage: 'Something is not right',
                user: info
            });
        }

        req.login(user, {session: false}, err => {
            if (err) {
                res.send(err)
            }
        })
        //generate a signed son web token with the contents of user object and return it in the response
        const token = jwt.sign(createdToken(user), 'hdweb')
        return res.json({accessToken: token})

    }) (req, res)
})

module.exports = routes