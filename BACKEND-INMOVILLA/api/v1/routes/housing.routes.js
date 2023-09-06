const {Router} = require('express')
const housingController = require('../../../controllers/housingController')


const router = Router()


router.get('/', housingController.getAll)
router.get('/:id', housingController.get)
router.post('/',housingController.create)
router.put('/:id',housingController.update)
router.delete('/:id',housingController.destroy)

module.exports = router