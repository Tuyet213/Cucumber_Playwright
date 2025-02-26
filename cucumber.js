
const options = [
 '--require-module ts-node/register',
 '--require tests/steps/**/*.js',
 '--format progress',
 '--require tests/setup.js',
 '--format html:reports/cucumber-report.html',
 '--format json:reports/cucumber-report.json',
].join(' ');
const features = ['tests/features/', options].join(' ');
module.exports = {
 default: features,
 parallel: true,
 //retry: 2,
 worldParameters: {
    baseUrl: 'https://demo.growcrm.io',
    timeout: 60000,
  },

};