// @ts-check
const { test, expect } = require('@playwright/test');
const Payers = require('../../../pages/BudExecPayers');
const Dashboard = require('../../../../pages/Dashboard');

test.describe('Категория: Плательщики (Бюдж. Орг.)', () => {
    let payers;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        payers = new Payers(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await payers.navigateToPage();
    });
    test('Check tab header', async () => {
        await payers.checkTabHeader();
    });
    test('Get relative list', async () => {
        await payers.chooseRelativeDataToList();
    });    
    test('Get spreadsheet list', async () => {
        await payers.checkSpreadsheetHeaders();
    });
    

})