const {Router} = require('express')
const favoriteController = require('../../../controllers/favoriteController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')

const router = Router()


router.get('/', authenticateJWT, /*authorize([roles["ADMIN"]]),*/ favoriteController.getAll)
router.get('/:id', authenticateJWT, /*authorize([roles["ADMIN"]]),*/ favoriteController.get)
router.post('/', authenticateJWT, /*authorize([roles["ADMIN"]]),*/ favoriteController.create)
router.put('/:id', authenticateJWT, /*authorize([roles["ADMIN"]]),*/ favoriteController.update)
router.delete('/:id', authenticateJWT, /*authorize([roles["ADMIN"]]),*/ favoriteController.destroy)

module.exports = router