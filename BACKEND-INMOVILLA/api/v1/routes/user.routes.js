const {Router} = require('express')
const userController = require('../../../controllers/userController')
const verify = require('../../../middlewares/jwt')

const router = Router()


router.get('/',/*verify,*/userController.getAll)
router.get('/:id',/*verify,*/userController.get)
router.post('/',/*verify,*/userController.create)
router.put('/:id',/*verify,*/userController.update)
router.delete('/:id',/*verify,*/userController.destroy)

module.exports = router;