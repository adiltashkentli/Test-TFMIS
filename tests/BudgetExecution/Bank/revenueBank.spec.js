// @ts-check
const { test, expect } = require('@playwright/test');
const RevenueBank = require('../../../pages/BudExecRevenueBank');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Категория: Доходы(Банк)', () => {
    let revenueBank;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        revenueBank = new RevenueBank(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await revenueBank.navigateToPage();
    });
    test('Check tab header', async () => {
        await revenueBank.checkTabHeader();
    });
    test('Get relative list', async () => {
        await revenueBank.getRelativeList();
    });
    test('Get spreadsheet headers', async () => {
        await revenueBank.checkSpreadsheetList();
    });
    test('Increase pagination', async () => {
        await revenueBank.pagination();
    });
    test('Check footer (for now/no data)', async () => {
        await revenueBank.checkFooter();
    });
})