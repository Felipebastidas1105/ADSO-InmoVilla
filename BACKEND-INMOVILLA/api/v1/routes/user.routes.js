const {Router} = require('express')
const userController = require('../../../controllers/userController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')

const router = Router()


router.get('/', userController.getAll)
router.get('/:id', authenticateJWT, authorize([roles["ADMIN"]]), userController.get)
router.post('/',userController.create)
router.put('/:id', authenticateJWT, authorize([roles["ADMIN"]],[roles["USER"]]),userController.update)
router.delete('/:id', authenticateJWT, authorize([roles["ADMIN"]]),userController.destroy)

module.exports = router;