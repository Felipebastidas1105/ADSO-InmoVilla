const {Router} = require('express')
const contractController = require('../../../controllers/contractController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')

const router = Router()


router.get('/', authenticateJWT, authorize([roles["ADMIN"]]), contractController.getAll)
router.get('/:id', authenticateJWT, authorize([roles["ADMIN"]],[roles["AGENT"]],[roles["USER"]]), contractController.get)
router.post('/', authenticateJWT, authorize([roles["ADMIN"]],roles["AGENT"]),contractController.create)
router.put('/:id', authenticateJWT, authorize([roles["ADMIN"]],[roles["AGENT"]]),contractController.update)
router.delete('/:id', authenticateJWT, authorize([roles["ADMIN"]],[roles["AGENT"]]),contractController.destroy)

module.exports = router;