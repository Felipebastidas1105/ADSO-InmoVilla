// const db = require('../../../models')
const {Router} = require('express')
const AdminController = require('../../../controllers/administradoController')
const administradoController = require('../../../controllers/administradoController')

const router = Router()


router.get('/', administradoController.getAll)
router.get('/:adminId', administradoController.getAdministrator)
router.post('/',administradoController.createAdministrador)
router.put('/:userId',administradoController.updateAdministrador)
router.delete('/:userId',administradoController.deleteAdministrador)

module.exports = router;