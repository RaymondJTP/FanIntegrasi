const router = require('express').Router()
const Controller = require('../controllers')
const authentication = require('../middlewares/auth')

router.post('/registrasi', Controller.insertUsers) 
router.post('/login', Controller.login)
router.use(authentication)

router.post('/insertData', Controller.insertData) 
router.get('/getData', Controller.getData)
router.put('/approve', Controller.approve)

module.exports = router