
const { Router } = require('../utils/Router')
const { getAllProducts } = require('../controller/products')

var router = new Router()
router.get('/api/v1/products/',getAllProducts)
module.exports = router