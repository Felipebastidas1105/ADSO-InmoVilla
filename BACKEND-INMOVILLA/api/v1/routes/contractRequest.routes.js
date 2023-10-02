const {Router} = require('express')
const contractRequestController = require('../../../controllers/contractRequestController')


const router = Router()


router.get('/', contractRequestController.getAll)
router.get('/:id', contractRequestController.get)
router.post('/',contractRequestController.create)
router.put('/:id',contractRequestController.update)
router.delete('/:id',contractRequestController.destroy)

module.exports = router;