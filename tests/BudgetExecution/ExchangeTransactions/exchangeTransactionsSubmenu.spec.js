// @ts-check
const { test, expect } = require('@playwright/test');
const ExchangeTransactionSubmenu = require('../../../pages/BudExecExchangeTransacSubmenu');
const Dashboard = require('../../../../pages/Dashboard');

test.describe('Подменю: Валютные ОП', () => {
    let exchangeTransactionSubmenu;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        exchangeTransactionSubmenu = new ExchangeTransactionSubmenu(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await exchangeTransactionSubmenu.navigateToPage();
    });
    test('Check categories list', async () => {
        await exchangeTransactionSubmenu.checkCategoriesList();
    });

})