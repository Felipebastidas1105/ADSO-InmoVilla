const {Router} = require('express')
const typeHousingController = require('../../../controllers/typeHousingController')


const router = Router()


router.get('/', typeHousingController.getAll)
router.get('/:id', typeHousingController.get)
router.post('/',typeHousingController.create)
router.put('/:id',typeHousingController.update)
router.delete('/:id',typeHousingController.destroy)

module.exports = router