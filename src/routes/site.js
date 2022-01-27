const express = require('express');
const router = express.Router();

const siteController = require('../controllers/SiteController');

router.get('/hang-moi', siteController.show);
router.get('/admin', siteController.admin);
router.get('/', siteController.home);

module.exports = router;
