const {Router} = require('express')
const requestContractJointtenantsController = require('../../../controllers/requestContractJointtenantsController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')

const router = Router()


router.get('/', authenticateJWT, authorize([roles["ADMIN"]]), requestContractJointtenantsController.getAll)
router.get('/:id', authenticateJWT, authorize([roles["ADMIN"]]), requestContractJointtenantsController.get)
router.post('/', authenticateJWT, authorize([roles["ADMIN"]]),requestContractJointtenantsController.create)
router.put('/:id', authenticateJWT, authorize([roles["ADMIN"]]),requestContractJointtenantsController.update)
router.delete('/:id', authenticateJWT, authorize([roles["ADMIN"]]),requestContractJointtenantsController.destroy)

module.exports = router;