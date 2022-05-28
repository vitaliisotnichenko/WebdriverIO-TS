require("ts-node").register({ files: true })
require('dotenv').config()
exports.config = {
    runner: 'local',
    specs: [
        './test/**/*.ts'
    ],
    hostname: 'localhost',
    port: 4444,
    path: '/',
    protocol: 'http',
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome'
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    baseUrl: String(process.env.BASE_URL),
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    // reporters: ['spec',
    //     [
    //         "allure",
    //         {
    //             outputDir: "allure-results",
    //             disableMochaHooks: true,
    //             disableWebdriverStepsReporting: true,
    //             disableWebdriverScreenshotsReporting: false
    //         }
    //     ]
    // ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        // retries: 3,
        // grep: '@SMOKE'
    },
    // afterTest: function (test) {
    //     if (test.error !== undefined) {
    //         browser.takeScreenshot();
    //     }
    // }
}
