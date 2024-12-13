// @ts-check
const { test, expect } = require('@playwright/test');
const DebtManual = require('../../../pages/BudExecDebtManual');
const Dashboard = require('../../../../pages/Dashboard');

test.describe('Категория: Задолженность ГУП', () => {
    let debtManual;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        debtManual = new DebtManual(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await debtManual.navigateToPage();
    });
    test('Check tab header', async () => {
        await debtManual.checkTabHeader();
    });
    test('Get relative data', async () => {
        await debtManual.getRelativeList();
    });
    test ('Check spreadsheet headers', async()=>{
        await debtManual.spreadsheetListAssertion();
    });
    test ('Add modal func', async()=>{
        await debtManual.addModalFunctionality();
    });
    test ('Increase pagination', async()=>{
        await debtManual.pagination();
    });
    test ('Footer 2 area', async()=>{
        await debtManual.footerArea();
    });
})