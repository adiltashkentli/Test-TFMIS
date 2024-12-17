// @ts-check
const { test, expect } = require('@playwright/test');
const BankSubmenu = require('../../../pages/BudExecBankSubmenu');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Подменю: Банк', () => {
    let bankSubmenu;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        bankSubmenu = new BankSubmenu(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await bankSubmenu.navigateToPage();
    });
    test('Check categories list', async () => {
        await bankSubmenu.checkCategoriesList();
    });

})