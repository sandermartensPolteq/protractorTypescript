global.DEFAULTTIMEOUT = 10000;

exports.config = {
    framework: 'jasmine',
    chromeDriver: 'C:/Users/sanderm/AppData/Roaming/npm/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.42.exe',
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
        require('ts-node').register({
            project: 'tsconfig.json'
        });
    }
};