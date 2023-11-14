const {Router} = require('express')
const serviceController = require('../../../controllers/serviceController')
const verify = require('../../../middlewares/jwt')

const router = Router()


router.get('/',/*verify,*/serviceController.getAll)
router.get('/:id',/*verify,*/serviceController.get)
router.post('/',/*verify,*/serviceController.create)
router.put('/:id',/*verify,*/serviceController.update)
router.delete('/:id',/*verify,*/serviceController.destroy)

module.exports = router