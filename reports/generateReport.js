const reporter = require('cucumber-html-reporter');
const options = {
  theme: 'bootstrap', // Hoặc 'hierarchy', 'foundation', 'simple'
  jsonFile: 'cucumber-report.json',
  output: 'cucumber-report.html',
  reportSuiteAsScenarios: true,
  launchReport: true, // Tự động mở báo cáo sau khi tạo
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "Staging",
    "Browser": "Chromium",
    "Platform": "Windows",
  },
};

reporter.generate(options);