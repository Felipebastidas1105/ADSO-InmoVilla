const {Router} = require('express')
const serviceController = require('../../../controllers/serviceController')


const router = Router()


router.get('/', serviceController.getAll)
router.get('/:id', serviceController.get)
router.post('/',serviceController.create)
router.put('/:id',serviceController.update)
router.delete('/:id',serviceController.destroy)

module.exports = router