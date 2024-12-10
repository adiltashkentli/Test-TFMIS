// @ts-check
const { test, expect } = require('@playwright/test');
const Contracts = require('../../../pages/BudExecContracts');
const Dashboard = require('../../../../pages/Dashboard');

test.describe('Категория: Договора', () => {
    let contracts;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        contracts = new Contracts(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await contracts.navigateToPage();
    });
    test('Check tab header', async () => {
        await contracts.checkTabHeader();
    });
    test('Get relative list', async () => {
        await contracts.inputDataToRelativeList();
    });    
    test('Get spreadsheet list', async () => {
        await contracts.spreadsheetListAssertion();
    });
    test('Increase pagination', async () => {
        await contracts.pagination();
    });
    test('Assert footer area', async () => {
        await contracts.footerArea();
    });
    test('Assert new contract button', async () => {
        await contracts.addNewContButton();
    });

})