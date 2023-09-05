const {Router} = require('express')
const agentController = require('../../../controllers/agentController')


const router = Router()


router.get('/', agentController.getAll)
router.get('/:id', agentController.get)
router.post('/',agentController.create)
router.put('/:id',agentController.update)
router.delete('/:id',agentController.destroy)

module.exports = router;