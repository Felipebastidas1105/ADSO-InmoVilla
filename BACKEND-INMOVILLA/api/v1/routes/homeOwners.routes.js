const {Router} = require('express')
const homeOwnerController = require('../../../controllers/homeOwnerController')


const router = Router()


router.get('/', homeOwnerController.getAll)
router.get('/:id', homeOwnerController.get)
router.post('/',homeOwnerController.create)
router.put('/:id',homeOwnerController.update)
router.delete('/:id',homeOwnerController.destroy)

module.exports = router;