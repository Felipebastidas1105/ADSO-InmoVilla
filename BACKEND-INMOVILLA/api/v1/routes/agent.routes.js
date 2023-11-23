const {Router} = require('express')
const agentController = require('../../../controllers/agentController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')

const router = Router()


router.get('/', authenticateJWT, authorize([roles["ADMIN"]]), agentController.getAll)
router.get('/:id', authenticateJWT, authorize([roles["ADMIN"]]), agentController.get)
router.post('/', authenticateJWT, authorize([roles["ADMIN"]]),agentController.create)
router.put('/:id', authenticateJWT, authorize([roles["ADMIN"]]),agentController.update)
router.delete('/:id', authenticateJWT, authorize([roles["ADMIN"]]),agentController.destroy)

module.exports = router;