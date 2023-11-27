const {Router} = require('express')
const typeHousingController = require('../../../controllers/typeHousingController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')

const router = Router()


router.get('/', authenticateJWT, authorize([roles["ADMIN"]]), typeHousingController.getAll)
router.get('/:id', authenticateJWT, authorize([roles["ADMIN"]]), typeHousingController.get)
router.post('/', authenticateJWT, authorize([roles["ADMIN"]]),typeHousingController.create)
router.put('/:id', authenticateJWT, authorize([roles["ADMIN"]]),typeHousingController.update)
router.delete('/:id', authenticateJWT, authorize([roles["ADMIN"]]),typeHousingController.destroy)

module.exports = router