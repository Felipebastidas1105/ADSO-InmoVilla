const {Router} = require('express')
const contractRequestController = require('../../../controllers/contractRequestController')
const verify = require('../../../middlewares/jwt')

const router = Router()


router.get('/',/*verify,*/contractRequestController.getAll)
router.get('/:id',/*verify,*/contractRequestController.get)
router.post('/',/*verify,*/contractRequestController.create)
router.put('/:id',/*verify,*/contractRequestController.update)
router.delete('/:id',/*verify,*/contractRequestController.destroy)

module.exports = router;