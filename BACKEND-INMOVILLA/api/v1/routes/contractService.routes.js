const {Router} = require('express')
const contractServiceController = require('../../../controllers/contractServiceController')


const router = Router()


router.get('/', contractServiceController.getAll)
router.get('/:id', contractServiceController.get)
router.post('/',contractServiceController.create)
router.put('/:id',contractServiceController.update)
router.delete('/:id',contractServiceController.destroy)

module.exports = router;