// @ts-check
const { test, expect } = require('@playwright/test');
const ExpensesRegistry = require('../../../pages/BudExecExpensesRegistry');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Категория: Реестр расходов (расходы по банку)', () => {
    let expensesRegistry;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        expensesRegistry = new ExpensesRegistry(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await expensesRegistry.navigateToPage();
    });
    test('Check tab header', async () => {
        await expensesRegistry.checkTabHeader();
    });
    test('Get relative list', async () => {
        await expensesRegistry.getRelativeList();
    });
    test('Check 4 header buttons', async () => {
        await expensesRegistry.checkHeader4Buttons();
    });
    test('Check row assertion', async () => {
        await expensesRegistry.checkRowsAssertion();
    });
    test('Get spreadsheet headers', async () => {
        await expensesRegistry.checkSpreadsheetList();
    });
    test('Check footer 4 areas', async () => {
        await expensesRegistry.checkFooter();
    });
    test('Increade pagination', async () => {
        await expensesRegistry.pagination();
    });
})