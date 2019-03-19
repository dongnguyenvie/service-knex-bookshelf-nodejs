const { Router } = require('express')
const routes = Router()
const User = require('../models/user')

routes.post('/test', (req, res, next) => {
    res.json({rs: 'test Value'})
})

routes.get('/testb', async (req, res, next) => {

})

routes.get('/testa', (req, res, next) => {
    res.json({key:'value'})
})
module.exports = routes