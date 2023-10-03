const {Router} = require('express')
const ownerContractController = require('../../../controllers/ownerContractController')


const router = Router()


router.get('/', ownerContractController.getAll)
router.get('/:id', ownerContractController.get)
router.post('/',ownerContractController.create)
router.put('/:id',ownerContractController.update)
router.delete('/:id',ownerContractController.destroy)

module.exports = router;