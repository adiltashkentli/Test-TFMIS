// @ts-check
const { test, expect } = require('@playwright/test');
const ExpensesBank = require('../../../pages/BudExecExpensesBank');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Категория: Расходы (банк)', () => {
    let expensesBank;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        expensesBank = new ExpensesBank(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await expensesBank.navigateToPage();
    });
    test('Check tab header', async () => {
        await expensesBank.checkTabHeader();
    });
    test('Get relative list', async () => {
        await expensesBank.getRelativeList();
    });
    
    test('Get spreadsheet headings', async () => {
        await expensesBank.checkSpreadsheetHeadings();
    });
    test('Check header 5 buttons', async () => {
        await expensesBank.checkHeader5buttons();
    });
    test('Check footer 4 areas', async () => {
        await expensesBank.checkFooter();
    });
    test('Increase pagination', async () => {
        await expensesBank.pagination();
    });    
})