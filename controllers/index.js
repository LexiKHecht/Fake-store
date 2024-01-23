const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const storeRoutes = require('./storeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/', storeRoutes);

module.exports = router;
