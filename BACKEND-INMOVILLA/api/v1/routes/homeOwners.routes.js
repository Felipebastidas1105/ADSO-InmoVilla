const {Router} = require('express')
const homeOwnerController = require('../../../controllers/homeOwnerController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')

const router = Router()


router.get('/', authenticateJWT, authorize([roles["ADMIN"]]), homeOwnerController.getAll)
router.get('/:id', authenticateJWT, authorize([roles["ADMIN"]]), homeOwnerController.get)
router.post('/', authenticateJWT, authorize([roles["ADMIN"]]),homeOwnerController.create)
router.put('/:id', authenticateJWT, authorize([roles["ADMIN"]]),homeOwnerController.update)
router.delete('/:id', authenticateJWT, authorize([roles["ADMIN"]]),homeOwnerController.destroy)

module.exports = router;