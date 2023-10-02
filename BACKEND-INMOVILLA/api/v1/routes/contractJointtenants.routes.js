const {Router} = require('express')
const contractJointtenantController = require('../../../controllers/contractJointtenantController')


const router = Router()


router.get('/', contractJointtenantController.getAll)
router.get('/:id', contractJointtenantController.get)
router.post('/',contractJointtenantController.create)
router.put('/:id',contractJointtenantController.update)
router.delete('/:id',contractJointtenantController.destroy)

module.exports = router;