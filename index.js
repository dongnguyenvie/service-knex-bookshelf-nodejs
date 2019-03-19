const express = require('express')
const path = require('path')
const bodyParse = require('body-parser')
const apiRoutes = require('./api/routes') // route handler
const authRoutes = require('./api/routes/auth')
const testRoutes = require('./module/gg-driver')
const Cors = require('cors')
const passport = require('passport');
require('./config/passport.js')
const app = express()

app.use(Cors())
app.set('port', process.env.PORT || 3000)
app.use(bodyParse.json({limit: '50mb'}))
app.use(bodyParse.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', authRoutes)  // all api public
app.use('/', testRoutes)  // test driver
app.use('/', passport.authenticate('jwt', {session: false}), apiRoutes) // all http routes was set here.
// app.use('/', routes)

app.listen(app.get('port'), () => {
    console.log('server on....', app.get('port'))
})
