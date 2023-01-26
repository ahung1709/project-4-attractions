const express = require('express');
const router = express.Router();
const attractionsCtrl = require('../../controllers/api/attractions.js');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/attractions
router.get('/', attractionsCtrl.index);

// POST /api/attractions
router.post('/', attractionsCtrl.create)

// PUT /api/attractions/:id
console.log("inside routes/api/attractions before attractionsCtrl.update")
router.put('/', attractionsCtrl.update)

// DELETE /api/attractions/:id
console.log("inside routes/api/attractions before attractionsCtrl.delete")
router.delete('/', attractionsCtrl.delete)

// router.post("/login", usersCtrl.login)
// router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;
