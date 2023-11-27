const {Router} = require('express')
const tenantController = require('../../../controllers/tenantController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')

const router = Router()


router.get('/', authenticateJWT, authorize([roles["ADMIN"]]), tenantController.getAll)
router.get('/:id', authenticateJWT, authorize([roles["ADMIN"]]), tenantController.get)
router.post('/', authenticateJWT, authorize([roles["ADMIN"]]),tenantController.create)
router.put('/:id', authenticateJWT, authorize([roles["ADMIN"]]),tenantController.update)
router.delete('/:id', authenticateJWT, authorize([roles["ADMIN"]]),tenantController.destroy)

module.exports = router