const { expect } = require('@playwright/test');
class LoginPage {
    constructor(page) {
        this.page = page;
        this.baseURL = 'https://devfn.vercel.app/';
        this.userName = page.locator('#email');
        this.password = page.locator('#password');
        this.loginButton = page.getByRole('button', { name: 'Next →' });
        this.dzClick = page.locator('div').filter({ hasText: /^DZ Test$/ }).first();
        this.reckoClick = page.locator('div').filter({ hasText: /^Recko$/ }).first();
        this.paymentSummary = page.getByText('Payments Payment Summary');
        this.notes = page.getByText('Notes');
        this.documents = page.getByText('Documents');
        this.clear = page.getByText('clear');
        this.toggle = page.locator('div:nth-child(2) > .flex > .icon-container > .text-current > svg').first();
        this.clickRecord = page.getByText('MUDATAGTAFSJJ7BXPESB4QG5');

    }

    async goToLogin() {
        await this.page.goto(this.baseURL);
    }

    async login(username, password) {
        await this.userName.type(username);
        await this.password.type(password);
        await this.loginButton.click();
    }

    async clickOnDZTest() {
        await this.dzClick.click();
    }

    async clickOnRecko() {
        await this.reckoClick.click();
    }

    async clickOnPaymentSummary() {
        await this.paymentSummary.click();
    }

    async clickOnNotes() {
        await this.notes.click();
    }

    async clickOnDocuments() {
        await this.documents.click();
    }

    async clickOnClear() {
        await this.clear.click();
    }

    async toggleButton() {
        await this.toggle.click();
    }

    async clickPaymentRecord() {
        await this.clickRecord.click();
    }
 
}

module.exports = { LoginPage };
