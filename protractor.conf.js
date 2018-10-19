var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');


global.DEFAULTTIMEOUT = 10000;

exports.config = {
    framework: 'jasmine',
    chromeDriver: './chromedriver_2.43.exe',
    directConnect: true,
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--no-sandbox']
        }
    },
    specs: [
        './spec.ts'
    ],
    onPrepare: function(){

        setTimeout(function() {
            browser.driver.executeScript(function() {
                return {
                    width: window.screen.availWidth,
                    height: window.screen.availHeight
                };
            }).then(function(result) {
                browser.driver.manage().window().setSize(result.width, result.height);
            });
        });

        require('ts-node').register({
            project: 'tsconfig.json'
        });

        return browser.getProcessedConfig().then(function (config) {
            var browserName = config.capabilities.browserName;

            jasmine.getEnv().addReporter(new SpecReporter({
                displayFailuresSummary: true,
                displayFailureSpec: true,
                displaySuiteNumber: true,
                displaySpecDuration: true
            }));

            jasmine.getEnv().addReporter(new HtmlReporter({
                baseDirectory: './reports/' + getFolderName() + ' ' + browserName
            }).getJasmine2Reporter());

            function getFolderName() {
                var currentTimestamp = new Date();
                return currentTimestamp.toLocaleDateString('NL-be').concat(
                    ' ', currentTimestamp.getHours().toString(),
                    '.', currentTimestamp.getMinutes().toString(),
                    '.', currentTimestamp.getSeconds().toString());
            }
        });
    }
};