const { Router } = require('../utils/Router')
const adminController = require('../controller/admin-product')

var router = new Router()

router.get('/adminProducts', adminController.getAdminHTML)
router.get('/admin-products.html', adminController.getAdminHTML)
router.get('/styles/nav.css', adminController.getAdminCSS2)
router.get('/styles/admin-product.css',adminController.getAdminCSS1)
router.get('/scripts/nav.js', adminController.getAdminJS1)
router.get('/scripts/adminProduct.js', adminController.getAdminJS2)
router.get('/products',adminController.getProducts)

///exemplu
///router.get(url_string, functieApelata)
///
module.exports.admin = router
