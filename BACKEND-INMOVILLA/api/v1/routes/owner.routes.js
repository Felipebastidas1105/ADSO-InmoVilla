const {Router} = require('express')
const ownerController = require('../../../controllers/ownerrController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')

const router = Router()


router.get('/', authenticateJWT, authorize([roles["ADMIN"]],[roles["AGENT"]]), ownerController.getAll)
router.get('/:id', authenticateJWT, authorize([roles["ADMIN"]],[roles["AGENT"]]), ownerController.get)
router.post('/', authenticateJWT, authorize([roles["ADMIN"]],[roles["AGENT"]]),ownerController.create)
router.put('/:id', authenticateJWT, authorize([roles["ADMIN"]],[roles["AGENT"]]),ownerController.update)
router.delete('/:id', authenticateJWT, authorize([roles["ADMIN"]],),ownerController.destroy)

module.exports = router