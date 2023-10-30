const {Router} = require('express')
const homeController = require('../../../controllers/homeController')


const router = Router()



router.get('/', homeController.getAll)
router.get('/:id', homeController.get)
router.post('/',homeController.create)
router.put('/:id',homeController.update)
router.delete('/:id',homeController.destroy)

module.exports = router;