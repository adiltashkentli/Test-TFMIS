// @ts-check
const { test, expect } = require('@playwright/test');
const TreasureDepartment = require('../../../pages/BudExecTreasureDepartment');
const Dashboard = require('../../../../pages/Dashboard');


test.describe('Категория: Отделы казначейства', () => {
    let treasureDepartment;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        treasureDepartment = new TreasureDepartment(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await treasureDepartment.navigateToPage();
    });
    test('Check tab header', async () => {
        await treasureDepartment.checkTabHeader();
    });
    test('Get relative list', async () => {
        await treasureDepartment.selectDataToRelativeList();
    });
    test('Add new department modal func', async () => {
        await treasureDepartment.addNewDepartment();
    });
    test ('Check spreadsheet headers', async()=>{
        await treasureDepartment.spreadsheetListAssertion();
    });
    test ('Increase pagination', async()=>{
        await treasureDepartment.pagination();
    });
})