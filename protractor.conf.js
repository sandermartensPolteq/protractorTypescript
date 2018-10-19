var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

global.DEFAULTTIMEOUT = 10000;

exports.config = {
    framework: 'jasmine',
    chromeDriver: 'C:/Users/sanderm/AppData/Roaming/npm/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.43.exe',
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


        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailureSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true
        }))
    }
};