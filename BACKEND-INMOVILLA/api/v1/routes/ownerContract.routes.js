const {Router} = require('express')
const ownerContractController = require('../../../controllers/ownerContractController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')

const router = Router()


router.get('/', authenticateJWT, authorize([roles["ADMIN"]]), ownerContractController.getAll)
router.get('/:id', authenticateJWT, authorize([roles["ADMIN"]]), ownerContractController.get)
router.post('/', authenticateJWT, authorize([roles["ADMIN"]]),ownerContractController.create)
router.put('/:id', authenticateJWT, authorize([roles["ADMIN"]]),ownerContractController.update)
router.delete('/:id', authenticateJWT, authorize([roles["ADMIN"]]),ownerContractController.destroy)

module.exports = router;