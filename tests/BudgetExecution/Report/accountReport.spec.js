// @ts-check
const { test, expect } = require('@playwright/test');
const AccountReport = require('../../../pages/BudExecAccountReport');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Категория: Бухгалтерские отчеты', () => {
    let accountReport;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        accountReport = new AccountReport(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await accountReport.navigateToPage();
    });
    test('Check tab header', async () => {
        await accountReport.checkTabHeader();
    });
    test('Get 1 relative list', async () => {
        await accountReport.chooseRelativeDataToList1();
    });
    test('Check 1 spreadsheet headings', async () => {
        await accountReport.check1SpreadsheetHeaders();
    });
    test('Get 2 relative list', async () => {
        await accountReport.chooseRelativeDataToList1();
    });
    test('Check 2 spreadsheet headings', async () => {
        await accountReport.check2SpreadsheetHeaders();
    });
    test('Increade pagination', async () => {
        await accountReport.pagination();
    });    
})