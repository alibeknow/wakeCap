const express = require('express');

const requestValidator = require('../../common/middleware/requestValidator');
const { getController } = require('../controllers/report');
const { reportValidator } = require('../validator/index');
const ReportService = require('../services/reportService');

const router = express.Router();

router.get('/', requestValidator(reportValidator), getController);
router.get('/generateReport', async (req, res, next) => {
  try {
    return await ReportService.generateReports();
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
