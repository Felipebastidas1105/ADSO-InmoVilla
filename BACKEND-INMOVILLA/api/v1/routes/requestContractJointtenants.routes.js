const {Router} = require('express')
const requestContractJointtenantsController = require('../../../controllers/requestContractJointtenantsController')


const router = Router()


router.get('/', requestContractJointtenantsController.getAll)
router.get('/:id', requestContractJointtenantsController.get)
router.post('/',requestContractJointtenantsController.create)
router.put('/:id',requestContractJointtenantsController.update)
router.delete('/:id',requestContractJointtenantsController.destroy)

module.exports = router;