const {Router} = require('express')
const typeTargetController = require('../../../controllers/typeTargetController')
const verify = require('../../../middlewares/jwt')

const router = Router()


router.get('/',/*verify,*/typeTargetController.getAll)
router.get('/:id',/*verify,*/typeTargetController.get)
router.post('/',/*verify,*/typeTargetController.create)
router.put('/:id',/*verify,*/typeTargetController.update)
router.delete('/:id',/*verify,*/typeTargetController.destroy)

module.exports = router