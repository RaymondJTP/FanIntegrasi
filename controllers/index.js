const {User, Epresence} = require('../models')
const jwt = require('jsonwebtoken')
const {comparePassword} = require('../helpers/bcrypt')
const {signToken} = require('../helpers/jwt')

class Controller{
    static async getData(req,res,next){
        try {
            const result = await Epresence.findAll()
            res.status(200).json({message : 'Success get data',result})
        } catch (err) {
            console.log(err);
            res.json(err)
        }
    }

    static async insertData(req,res,next){
        try {

            const {type, waktu} = req.body
            console.log(req.body);
            const {id,nama,email,npp,npp_supervisor} = req.user

            const result = await Epresence.create({
                id_users : id,
                type,
                is_approve : 'FALSE',
                waktu
            })
            res.status(201).json(result)
        } catch (err) {
            
        }
    }

    static async insertUsers(req,res,next){
        try {
            const {nama,email,npp, npp_supervisor,password} = req.body
            console.log(req.body);
            const result = await User.create({nama,email,npp, npp_supervisor,password})
            res.status(201).json(result)
        } catch (err) {
            console.log(err);
            res.json(err)
        }
    }

    static async login(req,res,next){
        try {
            console.log('masuk');
            const {email,password} = req.body
            const user = await User.findOne({
                where :{email}
            })
            if(!user){
                throw ({name : 'invalid'})
            }

            let isValid = comparePassword(password, user.password)
            if(!isValid){
                throw ({name : 'invalid'})
            }

            let tokenPayLoad = {id: user.id, email: user.email}
            let access_token = signToken(tokenPayLoad)
            
            res.status(201).json({access_token})
        } catch (err) {
            console.log(err);
            res.json(err)
        }
    }


    static async approve(req,res,next){
        try {
            console.log('asuop');
            const {approve,id_users} = req.body
            const {id,nama,email,npp,npp_supervisor} = req.user
            const findWorker = await User.findOne({
                where : {id: id_users}
            })
            const findSupervisor = await User.findOne({
                where : {id}
            })

            if(findWorker.npp_supervisor != findSupervisor.npp){
                throw ({message : 'Anda bukan supervisor'})
            }
            const result = await Epresence.update(
                {is_approve : approve},
                {where : {id_users}},
                {returning : true}
            )
            res.status(200).json({message : 'Success update'})
        } catch (err) {
            console.log(err);
            res.json(err)
        }
    }
}


module.exports = Controller