
const { Router } = require('../utils/Router')
const { getAllProducts, deleteProduct } = require('../controller/products')
const { createProduct } = require('../controller/products')

var router = new Router()
router.get('/api/v1/products/',getAllProducts)
router.post('/api/v1/products/',createProduct)
router.delete('/api/v1/products/delete/',deleteProduct)
module.exports = router