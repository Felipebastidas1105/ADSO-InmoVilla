const {Router} = require('express')
const contractRequestController = require('../../../controllers/contractRequestController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')

const router = Router()


router.get('/', authenticateJWT, authorize([roles["ADMIN"]]), contractRequestController.getAll)
router.get('/:id', authenticateJWT, authorize([roles["ADMIN"]],[roles["USER"]],[roles["AGENT"]]), contractRequestController.get)
router.post('/', authenticateJWT, authorize([roles["ADMIN"]],[roles["USER"]],[roles["AGENT"]]),contractRequestController.create)
router.put('/:id', authenticateJWT, authorize([roles["ADMIN"]],[roles["AGENT"]]),contractRequestController.update)
router.delete('/:id', authenticateJWT, authorize([roles["ADMIN"]], [roles["AGENT"]]),contractRequestController.destroy)

module.exports = router;