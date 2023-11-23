const {Router} = require('express')
const contractServiceController = require('../../../controllers/contractServiceController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')

const router = Router()


router.get('/', authenticateJWT, authorize([roles["ADMIN"]]), contractServiceController.getAll)
router.get('/:id', authenticateJWT, authorize([roles["ADMIN"]]), contractServiceController.get)
router.post('/', authenticateJWT, authorize([roles["ADMIN"]]),contractServiceController.create)
router.put('/:id', authenticateJWT, authorize([roles["ADMIN"]]),contractServiceController.update)
router.delete('/:id', authenticateJWT, authorize([roles["ADMIN"]]),contractServiceController.destroy)

module.exports = router;