const { CronJob } = require('cron');

const ReportService = require('../../modules/services/reportService');

// Cron job everyday on 00:00 AM start report
const reportJob = new CronJob('*/10 * * * * *', async () => {
  try {
    console.log('asd');
    await ReportService.generateReports();
  } catch (err) {
    // will be handled
    console.log(err);
  }
});

module.exports = reportJob;
