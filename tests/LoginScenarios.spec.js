const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageobjects/LoginPage');
const dataset = JSON.parse(JSON.stringify(require('../utils/LoginTestData.json')));
const { customtest } = require('../utils/test-base-login');


customtest('Validate Finnoto login', async ({ page, testDataForLoginPage }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goToLogin();
    await loginPage.login(testDataForLoginPage.Username, testDataForLoginPage.password);
    await loginPage.clickOnDZTest();
    await loginPage.clickOnRecko();
    await loginPage.clickOnPaymentSummary();
    await loginPage.toggleButton();
    await loginPage.clickPaymentRecord();
    await loginPage.clickOnNotes();
    await loginPage.clickOnDocuments();
    await loginPage.clickOnClear();
});

customtest('Validate Finnoto login for 1024*768', async ({ page, testDataForLoginPage }) => {
    const loginPage = new LoginPage(page);
    await page.setViewportSize({width: 1024, height: 768});
    await loginPage.goToLogin();
    await loginPage.login(testDataForLoginPage.Username, testDataForLoginPage.password);
    await loginPage.clickOnDZTest();
    await loginPage.clickOnRecko();
    await loginPage.clickOnPaymentSummary();
    await loginPage.toggleButton();
    await loginPage.clickPaymentRecord();
    await loginPage.clickOnNotes();
    await loginPage.clickOnDocuments();
    await loginPage.clickOnClear();
});


