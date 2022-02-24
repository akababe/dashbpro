// import router
const router = require('express').Router();

// import controller
const controller = require('../controllers');

router.get('/c', controller.getsData);

module.exports = router;