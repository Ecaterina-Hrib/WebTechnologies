const { Router } = require('../utils/Router')
const makeupController = require('../controller/makeup')

var router = new Router()

router.get('/makeup', makeupController.getSearchHTML)
router.get('/makeup.html', makeupController.getSearchHTML)
router.get('/styles/nav.css', makeupController.getSearchCSS2)
router.get('/styles/search.css', makeupController.getSearchCSS1)
router.get('/scripts/nav.js', makeupController.getSearchJS1)
router.get('/scripts/search.js', makeupController.getSearchJS2)
router.get('/products', makeupController.getProducts)
    ///exemplu
    ///router.get(url_string, functieApelata)
    ///
module.exports.makeup = router