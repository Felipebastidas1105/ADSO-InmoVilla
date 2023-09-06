const {Router} = require('express')
const ownerController = require('../../../controllers/ownerrController')


const router = Router()


router.get('/', ownerController.getAll)
router.get('/:id', ownerController.get)
router.post('/',ownerController.create)
router.put('/:id',ownerController.update)
router.delete('/:id',ownerController.destroy)

module.exports = router