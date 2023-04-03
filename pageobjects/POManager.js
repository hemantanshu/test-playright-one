const { LoginPage } = require('./LoginPage');

class POManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
    }

    getLoginPage() {
        return this.loginPage;
    }
}
module.exports = { POManager };
