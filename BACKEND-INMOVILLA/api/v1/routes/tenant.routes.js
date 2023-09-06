const {Router} = require('express')
const tenantController = require('../../../controllers/tenantController')


const router = Router()


router.get('/', tenantController.getAll)
router.get('/:id', tenantController.get)
router.post('/',tenantController.create)
router.put('/:id',tenantController.update)
router.delete('/:id',tenantController.destroy)

module.exports = router