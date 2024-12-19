// @ts-check
const { test, expect } = require('@playwright/test');
const BankExpenses = require('../../../pages/BudExecBankExpenses');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Категория: Расходы по банку', () => {
    let bankExpenses;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        bankExpenses = new BankExpenses(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await bankExpenses.navigateToPage();
    });
    test('Check tab header', async () => {
        await bankExpenses.checkTabHeader();
    });
    test('Get relative list', async () => {
        await bankExpenses.getRelativeList();
    });
    test('Check 2 header buttons', async () => {
        await bankExpenses.checkHeader2Buttons();
    });
    test('Get spreadsheet headers', async () => {
        await bankExpenses.checkSpreadsheetList();
    });
    test('Check footer 4 areas', async () => {
        await bankExpenses.checkFooter();
    });
    test('Increade pagination', async () => {
        await bankExpenses.pagination();
    });
})