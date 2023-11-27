const {Router} = require('express')
const contractServiceController = require('../../../controllers/contractServiceController')
const verify = require('../../../middlewares/jwt')

const router = Router()


router.get('/',/*verify,*/contractServiceController.getAll)
router.get('/:id',/*verify,*/contractServiceController.get)
router.post('/',/*verify,*/contractServiceController.create)
router.put('/:id',/*verify,*/contractServiceController.update)
router.delete('/:id',/*verify,*/contractServiceController.destroy)

module.exports = router;