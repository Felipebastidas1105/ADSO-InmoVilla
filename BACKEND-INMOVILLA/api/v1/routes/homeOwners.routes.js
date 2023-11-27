const {Router} = require('express')
const homeOwnerController = require('../../../controllers/homeOwnerController')
const verify = require('../../../middlewares/jwt')

const router = Router()


router.get('/',/*verify,*/homeOwnerController.getAll)
router.get('/:id',/*verify,*/homeOwnerController.get)
router.post('/',/*verify,*/homeOwnerController.create)
router.put('/:id',/*verify,*/homeOwnerController.update)
router.delete('/:id',/*verify,*/homeOwnerController.destroy)

module.exports = router;