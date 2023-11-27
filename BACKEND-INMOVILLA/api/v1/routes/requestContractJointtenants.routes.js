const {Router} = require('express')
const requestContractJointtenantsController = require('../../../controllers/requestContractJointtenantsController')
const verify = require('../../../middlewares/jwt')

const router = Router()


router.get('/',/*verify,*/requestContractJointtenantsController.getAll)
router.get('/:id',/*verify,*/requestContractJointtenantsController.get)
router.post('/',/*verify,*/requestContractJointtenantsController.create)
router.put('/:id',/*verify,*/requestContractJointtenantsController.update)
router.delete('/:id',/*verify,*/requestContractJointtenantsController.destroy)

module.exports = router;