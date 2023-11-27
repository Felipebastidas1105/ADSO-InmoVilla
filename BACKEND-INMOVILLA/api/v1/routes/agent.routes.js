const {Router} = require('express')
const agentController = require('../../../controllers/agentController')
const verify = require('../../../middlewares/jwt')

const router = Router()


router.get('/',/*verify,*/agentController.getAll)
router.get('/:id',/*verify,*/agentController.get)
router.post('/',/*verify,*/agentController.create)
router.put('/:id',/*verify,*/agentController.update)
router.delete('/:id',/*verify,*/agentController.destroy)

module.exports = router;