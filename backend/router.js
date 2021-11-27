const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/convert', controller.convertMail)

module.exports = router;