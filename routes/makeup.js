
const { Router } = require('../utils/Router')
const { getAllMakeups } = require('../controller/makeup')
const { createMakeup }=require('../controller/makeup')
var router = new Router()
router.get('/api/v1/makeup/',getAllMakeups)
router.post('/api/v1/makeup/',createMakeup)

module.exports = router