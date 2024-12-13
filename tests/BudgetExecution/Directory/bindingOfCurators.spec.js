// @ts-check
const { test, expect } = require('@playwright/test');
const BindingOfCurators = require('../../../pages/BudExecBindingOfCurators');
const Dashboard = require('../../../../pages/Dashboard');

test.describe('Категория: Привязка куратор (Банк)', () => {
    let bindingOfCurators;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        bindingOfCurators = new BindingOfCurators(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await bindingOfCurators.navigateToPage();
    });
    test('Check tab header', async () => {
        await bindingOfCurators.checkTabHeader();
    });
    test('Get relative data', async () => {
        await bindingOfCurators.getRelativeList();
    });
    test ('Check spreadsheet headers', async()=>{
        await bindingOfCurators.spreadsheetListAssertion();
    });
    test ('Increase pagination', async()=>{
        await bindingOfCurators.pagination();
    });
})