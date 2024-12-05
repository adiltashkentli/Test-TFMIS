// @ts-check
const { test, expect } = require('@playwright/test');
const ExtractReports = require('../../../pages/BudExecExtractReports');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Категория: Выписка', () => {
    let extractReports;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        extractReports = new ExtractReports(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await extractReports.navigateToPage();
    });
    test('Check tab header', async () => {
        await extractReports.checkTabHeader();
    });
    test('Get relative list', async () => {
        await extractReports.chooseRelativeDataToList();
    });
    test('Check spreadsheet headings', async () => {
        await extractReports.check1SpreadsheetHeaders();
    });
    test('Check 3 header buttons', async () => {
        await extractReports.assert3HeaderButtons();
    });
    test('Check 2 spreadsheet headings', async () => {
        await extractReports.check2SpreadsheetHeaders();
    });
    test('Increade pagination', async () => {
        await extractReports.pagination();
    });    
})