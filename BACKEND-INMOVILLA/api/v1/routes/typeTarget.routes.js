const {Router} = require('express')
const typeTargetController = require('../../../controllers/typeTargetController')


const router = Router()


router.get('/', typeTargetController.getAll)
router.get('/:id', typeTargetController.get)
router.post('/',typeTargetController.create)
router.put('/:id',typeTargetController.update)
router.delete('/:id',typeTargetController.destroy)

module.exports = router