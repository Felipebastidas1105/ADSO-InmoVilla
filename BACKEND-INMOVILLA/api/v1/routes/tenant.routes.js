const {Router} = require('express')
const tenantController = require('../../../controllers/tenantController')
const verify = require('../../../middlewares/jwt')

const router = Router()


router.get('/',/*verify,*/tenantController.getAll)
router.get('/:id',/*verify,*/tenantController.get)
router.post('/',/*verify,*/tenantController.create)
router.put('/:id',/*verify,*/tenantController.update)
router.delete('/:id',/*verify,*/tenantController.destroy)

module.exports = router