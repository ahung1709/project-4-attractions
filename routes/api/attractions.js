const express = require('express');
const router = express.Router();
const attractionsCtrl = require('../../controllers/api/attractions.js');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/attractions
router.get('/', attractionsCtrl.index);
// router.post("/login", usersCtrl.login)
// router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;
