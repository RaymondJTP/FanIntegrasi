const jwt = require('jsonwebtoken')

function signToken(tokenPayLoad){
    return jwt.sign(tokenPayLoad, 'fanintegreasi');
}

function verifyToken(access_token){
    return jwt.verify(access_token, 'fanintegreasi')
}

module.exports = {
    signToken,verifyToken
}