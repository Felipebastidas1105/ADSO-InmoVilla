const {Router} = require('express')
const ownerController = require('../../../controllers/ownerrController')
const verify = require('../../../middlewares/jwt')

const router = Router()

router.get('/',/*verify,*/ownerController.getAll)
router.get('/:id',/*verify,*/ownerController.get)
router.post('/',/*verify,*/ownerController.create)
router.put('/:id',/*verify,*/ownerController.update)
router.delete('/:id',/*verify,*/ownerController.destroy)

module.exports = router