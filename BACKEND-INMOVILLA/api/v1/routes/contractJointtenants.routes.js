const {Router} = require('express')
const contractJointtenantController = require('../../../controllers/contractJointtenantController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')

const router = Router()


router.get('/', authenticateJWT, authorize([roles["ADMIN"]]), contractJointtenantController.getAll)
router.get('/:id', authenticateJWT, authorize([roles["ADMIN"]]), contractJointtenantController.get)
router.post('/', authenticateJWT, authorize([roles["ADMIN"]]),contractJointtenantController.create)
router.put('/:id', authenticateJWT, authorize([roles["ADMIN"]]),contractJointtenantController.update)
router.delete('/:id', authenticateJWT, authorize([roles["ADMIN"]]),contractJointtenantController.destroy)

module.exports = router;