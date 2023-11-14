const {Router} = require('express')
const ownerContractController = require('../../../controllers/ownerContractController')
const verify = require('../../../middlewares/jwt')

const router = Router()


router.get('/',/*verify,*/ownerContractController.getAll)
router.get('/:id',/*verify,*/ownerContractController.get)
router.post('/',/*verify,*/ownerContractController.create)
router.put('/:id',/*verify,*/ownerContractController.update)
router.delete('/:id',/*verify,*/ownerContractController.destroy)

module.exports = router;