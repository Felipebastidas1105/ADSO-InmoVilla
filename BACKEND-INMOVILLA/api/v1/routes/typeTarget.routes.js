const {Router} = require('express')
const typeTargetController = require('../../../controllers/typeTargetController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')

const router = Router()


router.get('/', authenticateJWT, authorize([roles["ADMIN"]]), typeTargetController.getAll)
router.get('/:id', authenticateJWT, authorize([roles["ADMIN"]]), typeTargetController.get)
router.post('/', authenticateJWT, authorize([roles["ADMIN"]]),typeTargetController.create)
router.put('/:id', authenticateJWT, authorize([roles["ADMIN"]]),typeTargetController.update)
router.delete('/:id', authenticateJWT, authorize([roles["ADMIN"]]),typeTargetController.destroy)

module.exports = router