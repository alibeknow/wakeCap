const { CronJob } = require('cron');

const ReportService = require('../../modules/services/reportService');

// Cron job everyday on 00:00 AM start report
const reportJob = new CronJob('0 * * * *', async () => {
  try {
    await ReportService.generateReports();
  } catch (err) {
    // will be handled
  }
});

module.exports = reportJob;
