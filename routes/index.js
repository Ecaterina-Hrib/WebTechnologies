const { Router } = require('../utils/Router')
const indexController = require('../controller')

var router = new Router()



router.get('/',indexController.getIndexHTML)
router.get('/index', indexController.getIndexHTML)
router.get('/index.html', indexController.getIndexHTML)
router.get('/styles/nav.css', indexController.getIndexCSS2)
router.get('/styles/index.css',indexController.getIndexCSS1)
router.get('/scripts/nav.js', indexController.getIndexJS)
router.get('/scripts/contact.js', indexController.getIndexJS2)
router.get('/products',indexController.getProducts)

module.exports.index = router
