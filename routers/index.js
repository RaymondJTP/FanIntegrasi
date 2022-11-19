const router = require('express').Router()
const Controller = require('../controllers')

router.get('/', Controller.getData)
router.post('/', Controller.insertData)

module.exports = router