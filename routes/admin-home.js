const { Router } = require('../utils/Router')
const adminhomeController = require('../controller/admin-home')

var router = new Router()


router.get('/adminHome', adminhomeController.getAdminHomeHTML)
router.get('/admin-home.html', adminhomeController.getAdminHomeHTML)
router.get('/styles/nav.css', adminhomeController.getAdminHomeCSS2)
router.get('/styles/admin-home.css',adminhomeController.getAdminHomeCSS1)
router.get('/scripts/nav.js', adminhomeController.getAdminHomeJS)

module.exports.adminHome = router
