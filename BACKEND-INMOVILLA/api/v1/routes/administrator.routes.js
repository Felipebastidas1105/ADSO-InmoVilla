// const db = require('../../../models')
const {Router} = require('express')
const AdminController = require('../../../controllers/administratorController')
const administradoController = require('../../../controllers/administratorController')

const router = Router()


router.get('/', administradoController.getAll)
router.get('/:adminId', administradoController.get)
router.post('/',administradoController.create)
router.put('/:adminId',administradoController.update)
router.delete('/:adminId',administradoController.destroy)

module.exports = router;