const {Router} = require('express')
const jointTenant = require('../../../controllers/jointTenantController')
const verify = require('../../../middlewares/jwt')

const router = Router()


router.get('/',/*verify,*/jointTenant.getAll)
router.get('/:id',/*verify,*/jointTenant.get)
router.post('/',/*verify,*/jointTenant.create)
router.put('/:id',/*verify,*/jointTenant.update)
router.delete('/:id',/*verify,*/jointTenant.destroy)

module.exports = router;