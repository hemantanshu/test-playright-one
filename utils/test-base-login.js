const base = require('@playwright/test');

exports.customtest = base.test.extend({
    testDataForLoginPage: {
        Username: 'hemantanshu@gmail.com',
        password: '123456',
    },
});
