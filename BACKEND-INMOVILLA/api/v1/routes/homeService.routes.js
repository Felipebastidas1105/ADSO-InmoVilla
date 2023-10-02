const {Router} = require('express')
const homeServiceController = require('../../../controllers/homeServiceController')


const router = Router()


router.get('/', homeServiceController.getAll)
router.get('/:id', homeServiceController.get)
router.post('/',homeServiceController.create)
router.put('/:id',homeServiceController.update)
router.delete('/:id',homeServiceController.destroy)

module.exports = router;