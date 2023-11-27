const {Router} = require('express')
const typeHousingController = require('../../../controllers/typeHousingController')
const verify = require('../../../middlewares/jwt')

const router = Router()


router.get('/',/*verify,*/typeHousingController.getAll)
router.get('/:id',/*verify,*/typeHousingController.get)
router.post('/',/*verify,*/typeHousingController.create)
router.put('/:id',/*verify,*/typeHousingController.update)
router.delete('/:id',/*verify,*/typeHousingController.destroy)

module.exports = router