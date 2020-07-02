const express = require('express');

const requestValidator = require('../../common/middleware/requestValidator');
const { addController } = require('../controllers/site');
const { addSchema } = require('../schemas/siteSchema');

const router = express.Router();

router.post('/', requestValidator(addSchema), addController);

module.exports = router;
