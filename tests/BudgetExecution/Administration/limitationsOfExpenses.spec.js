// @ts-check
const { test, expect } = require('@playwright/test');
const LimitationsOfExpenses = require('../../../pages/BudExecLimitationsOfExpenses');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Категория: Ограничения расходов  по статьям ', () => {
    let limitationsOfExpenses;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        limitationsOfExpenses = new LimitationsOfExpenses(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await limitationsOfExpenses.navigateToPage();
    });
    test('Check tab header', async () => {
        await limitationsOfExpenses.checkTabHeader();
    });
    test('Get relative list', async () => {
        await limitationsOfExpenses.getRelativeList();
    });
    test('Checkbox functionality', async () => {
        await limitationsOfExpenses.checkBoxAssertion();
    });
    test('Check spreadsheet headings', async () => {
        await limitationsOfExpenses.spreadsheetListAssertion();
    });
    test('View modal functionality', async () => {
        await limitationsOfExpenses.viewModalFunc();
    });
    test('Header 2 button assertion', async () => {
        await limitationsOfExpenses.header2buttonAssertion();
    });
    test('Increade pagination', async () => {
        await limitationsOfExpenses.pagination();
    }); 
})