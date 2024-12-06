// @ts-check
const { test, expect } = require('@playwright/test');
const ReportsofIncome = require('../../../pages/BudExecReportsofIncome');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Категория: Отчеты по доходам', () => {
    let reportsofIncome;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        reportsofIncome = new ReportsofIncome(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await reportsofIncome.navigateToPage();
    });
    test('Check tab header', async () => {
        await reportsofIncome.checkTabHeader();    
    });
    test('Get relative data', async () => {
        await reportsofIncome.chooseRelativeDataToList();
    });    
})