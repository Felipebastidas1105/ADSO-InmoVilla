const {Router} = require('express')
const jointTenant = require('../../../controllers/jointTenantController')


const router = Router()


router.get('/', jointTenant.getAll)
router.get('/:id', jointTenant.get)
router.post('/',jointTenant.create)
router.put('/:id',jointTenant.update)
router.delete('/:id',jointTenant.destroy)

module.exports = router;