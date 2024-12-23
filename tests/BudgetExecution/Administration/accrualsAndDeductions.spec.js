// @ts-check
const { test, expect } = require('@playwright/test');
const AccrualsAndDeductions = require('../../../pages/BudExecAccrualsAndDeductions');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Категория: Начисление и удержание', () => {
    let accrualsAndDeductions;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        accrualsAndDeductions = new AccrualsAndDeductions(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await accrualsAndDeductions.navigateToPage();
    });
    test('Check tab header', async () => {
        await accrualsAndDeductions.checkTabHeader();
    });
    test('Check spreadsheet headings', async () => {
        await accrualsAndDeductions.spreadsheetListAssertion();
    });
    test('Add modal functionality', async () => {
        await accrualsAndDeductions.addModalFunc();
    });
    test('Edit data functionality', async () => {
        await accrualsAndDeductions.editData();
    });
    test('Get spreadsheet headers', async () => {
        await accrualsAndDeductions.checkSpreadsheetList();
    });    
})