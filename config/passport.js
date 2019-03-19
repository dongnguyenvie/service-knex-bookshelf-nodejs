const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const User = require('../api/models/user')

/** 
 * {false} time out
 *  else {true}
 */
function checkTokenExpire ({exp}) {
    const now = Date.now() / 1000;
    return now > exp ? false : true
}

const options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : 'hdweb'
}

/**
 * @Middleware
 * 
 * All request to server using jwt must be checked
 * Success: next
 * false: response "Unauthorized"
 */
passport.use(new JWTStrategy(options, async (jwtPayload, done) => {
    console.log(jwtPayload)
    if (!checkTokenExpire(jwtPayload)) done(null, false)
    done(null, jwtPayload)

/**
 * find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload. 
    return new User({id : jwtPayload.id})
        .fetch()
        .then(user => {
            console.log('then')
            return done(null, user);
        })
        .catch(err => {
            console.log('catch')
            return done(err, false);
        });
*/
}
));

// @Login
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
}, (email, password, done) => {
    new User({email})
        .fetch()
        .then(user => {

            if (!user)
                return done(null, false, {errors: { 'email or password' : 'is invalid'}})
            if (!user.comparePassword(password, user)) 
                return done(null, false, {errors: { 'email or password' : 'is invalid'}})
            console.log('Login success..')
            return done(null, user)
        })
}))