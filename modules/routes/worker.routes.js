const express = require('express');

const requestValidator = require('../../common/middleware/requestValidator');
const { addController } = require('../controllers/worker');
const { addSchema } = require('../schemas/workerSchema');

const router = express.Router();

router.post('/', requestValidator(addSchema), addController);

module.exports = router;
