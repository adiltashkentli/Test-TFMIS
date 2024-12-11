// @ts-check
const { test, expect } = require('@playwright/test');
const Banks = require('../../../pages/BudExecBanks');
const Dashboard = require('../../../../pages/Dashboard');


test.describe('Категория: Банки', () => {
    let banks;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        banks = new Banks(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await banks.navigateToPage();
    });
    test('Check tab header', async () => {
        await banks.checkTabHeader();
    });
    test('No data from backend alert', async () => {
        await banks.noDataFromBackend();
    });
    
    test('Get relative list', async () => {
        await banks.inputDataToRelativeList();
    });
    test('Check spreadsheet headers', async () => {
        await banks.spreadsheetListAssertion();
    });
    test('Increase pagination', async () => {
        await banks.pagination();
    });
})