const {Router} = require('express')
const contractController = require('../../../controllers/contractController')
const verify = require('../../../middlewares/jwt')

const router = Router()


router.get('/',/*verify,*/contractController.getAll)
router.get('/:id',/*verify,*/contractController.get)
router.post('/',/*verify,*/contractController.create)
router.put('/:id',/*verify,*/contractController.update)
router.delete('/:id',/*verify,*/contractController.destroy)

module.exports = router;