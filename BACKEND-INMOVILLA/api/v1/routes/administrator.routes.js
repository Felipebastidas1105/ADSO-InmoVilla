// const db = require('../../../models')
const {Router} = require('express')
const AdminController = require('../../../controllers/administratorController')
const administradoController = require('../../../controllers/administratorController')

const router = Router()


router.get('/', administradoController.getAll)
router.get('/:adminId', administradoController.getAdministrator)
router.post('/',administradoController.createAdministrator)
router.put('/:adminId',administradoController.updateAdministrador)
router.delete('/:adminId',administradoController.deleteAdministrador)

module.exports = router;