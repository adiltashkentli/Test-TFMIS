// @ts-check
const { test, expect } = require('@playwright/test');
const ReportsBank = require('../../../pages/BudExecReportBank');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Категория: Отчеты (банк)', () => {
    let reportBank;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        reportBank = new ReportsBank(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await reportBank.navigateToPage();
    });
    test('Check tab header', async () => {
        await reportBank.checkTabHeader();
    });
    test('Get relative list', async () => {
        await reportBank.getRelativeList();
    });
    test('Check report buttons', async () => {
        await reportBank.checkReportButtons();
    });    
})