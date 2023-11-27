const {Router} = require('express')
const jointTenant = require('../../../controllers/jointTenantController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')

const router = Router()


router.get('/', authenticateJWT, authorize([roles["ADMIN"]]), jointTenant.getAll)
router.get('/:id', authenticateJWT, authorize([roles["ADMIN"]],[roles["AGENT"]],[roles["USER"]]), jointTenant.get)
router.post('/', authenticateJWT, authorize([roles["ADMIN"]],[roles["AGENT"]]),jointTenant.create)
router.put('/:id', authenticateJWT, authorize([roles["ADMIN"]],[roles["AGENT"]]),jointTenant.update)
router.delete('/:id', authenticateJWT, authorize([roles["ADMIN"]],[roles["AGENT"]]),jointTenant.destroy)

module.exports = router;