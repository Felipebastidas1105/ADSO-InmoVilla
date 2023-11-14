const {Router} = require('express')
const homeServiceController = require('../../../controllers/homeServiceController')
const verify = require('../../../middlewares/jwt')

const router = Router()


router.get('/',/*verify,*/homeServiceController.getAll)
router.get('/:id',/*verify,*/homeServiceController.get)
router.post('/',/*verify,*/homeServiceController.create)
router.put('/:id',/*verify,*/homeServiceController.update)
router.delete('/:id',/*verify,*/homeServiceController.destroy)

module.exports = router;