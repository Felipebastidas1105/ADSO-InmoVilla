const {Router} = require('express')
const homeServiceController = require('../../../controllers/homeServiceController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')

const router = Router()


router.get('/', authenticateJWT, authorize([roles["ADMIN"]]), homeServiceController.getAll)
router.get('/:id', authenticateJWT, authorize([roles["ADMIN"]]), homeServiceController.get)
router.post('/', authenticateJWT, authorize([roles["ADMIN"]]),homeServiceController.create)
router.put('/:id', authenticateJWT, authorize([roles["ADMIN"]]),homeServiceController.update)
router.delete('/:id', authenticateJWT, authorize([roles["ADMIN"]]),homeServiceController.destroy)

module.exports = router;