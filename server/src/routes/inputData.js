const express = require('express');
const router = new express.Router();
const InputModule = require('../controllers/input');

router.get('/getData',InputModule.getData);

router.post('/saveData', InputModule.saveData);


module.exports = router;