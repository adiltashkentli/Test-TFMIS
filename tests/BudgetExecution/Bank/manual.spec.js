// @ts-check
const { test, expect } = require('@playwright/test');
const Manual = require('../../../pages/BudExecManual');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Категория: Справочник', () => {
    let manual;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        manual = new Manual(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await manual.navigateToPage();
    });
    test('Check tab header', async () => {
        await manual.checkTabHeader();
    });
    test('Get spreadsheet headings', async () => {
        await manual.checkSpreadsheetHeadings();
    });
    test('Check footer area', async () => {
        await manual.checkFooter();
    });
    test('Increase pagination', async () => {
        await manual.pagination();
    });    
})