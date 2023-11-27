const {Router} = require('express')
const contractJointtenantController = require('../../../controllers/contractJointtenantController')
const verify = require('../../../middlewares/jwt')

const router = Router()


router.get('/',/*verify,*/contractJointtenantController.getAll)
router.get('/:id',/*verify,*/contractJointtenantController.get)
router.post('/',/*verify,*/contractJointtenantController.create)
router.put('/:id',/*verify,*/contractJointtenantController.update)
router.delete('/:id',/*verify,*/contractJointtenantController.destroy)

module.exports = router;