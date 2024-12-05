// @ts-check
const { test, expect } = require('@playwright/test');
const BalanceSheet = require('../../../pages/BudExecBalanceSheet');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Категория: Сальдо за период', () => {
    let balanceSheet;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        balanceSheet = new BalanceSheet(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await balanceSheet.navigateToPage();
    });
    test('Check tab header', async () => {
        await balanceSheet.checkTabHeader();
    });
    test('Get relative list', async () => {
        await balanceSheet.chooseRelativeDataToList();
    });
    test('Check spreadsheet headers', async () => {
        await balanceSheet.checkSpreadsheetHeaders();
    });
    test('Increade pagination', async () => {
        await balanceSheet.pagination();
    });
    test('Add button functionality', async () => {
        await balanceSheet.addButtonFunctionality();
    });
})