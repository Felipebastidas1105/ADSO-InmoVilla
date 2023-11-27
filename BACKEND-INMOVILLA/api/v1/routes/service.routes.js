const {Router} = require('express')
const serviceController = require('../../../controllers/serviceController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')

const router = Router()


router.get('/', authenticateJWT, authorize([roles["ADMIN"]]), serviceController.getAll)
router.get('/:id', authenticateJWT, authorize([roles["ADMIN"]]), serviceController.get)
router.post('/', authenticateJWT, authorize([roles["ADMIN"]]),serviceController.create)
router.put('/:id', authenticateJWT, authorize([roles["ADMIN"]]),serviceController.update)
router.delete('/:id', authenticateJWT, authorize([roles["ADMIN"]]),serviceController.destroy)

module.exports = router