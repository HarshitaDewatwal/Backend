const express = require('express');
const router = express.Router();
const { subscribeEmail, getSubscribers } = require('../controllers/newsletterController');

router.post('/', subscribeEmail);
router.get('/', getSubscribers);

module.exports = router;
