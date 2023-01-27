const express = require('express');
const router = express.Router();
const attractionsCtrl = require('../../controllers/api/attractions.js');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/attractions
router.get('/', attractionsCtrl.index);

// POST /api/attractions
router.post('/', ensureLoggedIn, attractionsCtrl.create)

// PUT /api/attractions/:id
router.put('/', ensureLoggedIn, attractionsCtrl.update)

// DELETE /api/attractions/:id
router.delete('/', ensureLoggedIn, attractionsCtrl.delete)

module.exports = router;
