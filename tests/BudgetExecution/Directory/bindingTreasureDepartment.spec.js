// @ts-check
const { test, expect } = require('@playwright/test');
const BindingTreasureDepartment = require('../../../pages/BudExecBindingTrsrDptmnt');
const Dashboard = require('../../../../pages/Dashboard');

test.describe('Категория: Привязка отделов казначейства с БЗ', () => {
    let bindingTreasureDepartment;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        bindingTreasureDepartment = new BindingTreasureDepartment(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await bindingTreasureDepartment.navigateToPage();
    });
    test('Check tab header', async () => {
        await bindingTreasureDepartment.checkTabHeader();
    });
    test('Get relative list', async () => {
        await bindingTreasureDepartment.selectDataToRelativeList();
    });
    test('Changes log modal func', async () => {
        await bindingTreasureDepartment.changesLog();
    });
    test('Add new department modal func', async () => {
        await bindingTreasureDepartment.addModalFunc();
    });
    test ('Check spreadsheet headers', async()=>{
        await bindingTreasureDepartment.spreadsheetListAssertion();
    });
    test ('Increase pagination', async()=>{
        await bindingTreasureDepartment.pagination();
    });
})