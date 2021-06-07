const { Router } = require('../utils/Router')
const adminController = require('../controller/admin')

var router = new Router()

router.get('/admin', adminController.getAdminHTML)
router.get('/admin.html', adminController.getAdminHTML)
router.get('/styles/nav.css', adminController.getAdminCSS2)
router.get('/styles/admin.css',adminController.getAdminCSS1)
router.get('/scripts/nav.js', adminController.getAdminJS)
router.get('/products',adminController.getProducts)
///exemplu
///router.get(url_string, functieApelata)
///
module.exports.admin = router
