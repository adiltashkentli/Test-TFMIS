// @ts-check
const { test, expect } = require('@playwright/test');
const EnteringBObalanceFunds = require('../../../pages/BudExecEnteringBObalanceFunds');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Категория: Ввод остатков БО по фондам', () => {
    let enteringBObalanceFunds;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        enteringBObalanceFunds = new EnteringBObalanceFunds(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await enteringBObalanceFunds.navigateToPage();
    });
    test('Check tab header', async () => {
        await enteringBObalanceFunds.checkTabHeader();
    });
    test('Get relative list', async () => {
        await enteringBObalanceFunds.chooseRelativeDataToList();
    });
    test('Check spreadsheet headers', async () => {
        await enteringBObalanceFunds.checkSpreadsheetHeaders();
    });
    test('Add button functionality', async()=>{
        await enteringBObalanceFunds.addButtonFunctionality();
    });
    test('Increase pagination', async()=>{
        await enteringBObalanceFunds.pagination();
    })
})