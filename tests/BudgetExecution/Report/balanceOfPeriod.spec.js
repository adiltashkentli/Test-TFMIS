// @ts-check
const { test, expect } = require('@playwright/test');
const BalanceOfPeriod = require('../../../pages/BudExecBalanceOfPeriod');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Категория: Баланс за период', () => {
    let balanceOfPeriod;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        balanceOfPeriod = new BalanceOfPeriod(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await balanceOfPeriod.navigateToPage();
    });
    test('Check tab header', async () => {
        await balanceOfPeriod.checkTabHeader();
    });
    test('Get relative list', async () => {
        await balanceOfPeriod.chooseRelativeDataToList();
    });

})