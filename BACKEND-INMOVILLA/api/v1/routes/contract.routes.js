const {Router} = require('express')
const contractController = require('../../../controllers/contractController')


const router = Router()


router.get('/', contractController.getAll)
router.get('/:id', contractController.get)
router.post('/',contractController.create)
router.put('/:id',contractController.update)
router.delete('/:id',contractController.destroy)

module.exports = router;