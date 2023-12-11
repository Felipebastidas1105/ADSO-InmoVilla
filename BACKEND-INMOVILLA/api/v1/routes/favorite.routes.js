const {Router} = require('express')
const favoriteController = require('../../../controllers/favoriteController')
const { authenticateJWT, authorize } = require('../../../middlewares/auth')
const roles = require('../../../utils/roles')

const router = Router()


router.get('/', favoriteController.getAll)
router.get('/:id', favoriteController.get)
router.post('/',favoriteController.create)
router.put('/:id',favoriteController.update)
router.delete('/:id',favoriteController.destroy)

module.exports = router