const {User} = require('../models')
const {verifyToken} = require('../helpers/jwt')

const authentication = async(req,res,next) => {
    try {
        const {access_token} = req.headers
        if(!access_token){
            throw{name : 'unaunthenticated'}
        }

        const tokenPayLoad = verifyToken(access_token)

        const getUser = await User.findOne({
            where : {
                email:tokenPayLoad.email
            }
        })

        if(!getUser){
            throw{name : 'unaunthenticated'}
        }

        req.user = {
            id :getUser.id,
            nama : getUser.nama,
            email : getUser.email,
            npp : getUser.npp,
            npp_supervisor : getUser.npp_supervisor,

        }
        next()
    } catch (err) {
        console.log(err);
        res.json(err)
    }
}

module.exports = authentication