// @ts-check
const { test, expect } = require('@playwright/test');
const Curators = require('../../../pages/BudExecCurators');
const Dashboard = require('../../../../pages/Dashboard');

test.describe('Категория: Кураторы', () => {
    let curators;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        curators = new Curators(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await curators.navigateToPage();
    });
    test('Check tab header', async () => {
        await curators.checkTabHeader();
    });
    test('Get relative data', async () => {
        await curators.getRelativeList();
    });
    test ('Add modal functionality', async()=>{
        await curators.addModalFunctionality();
    });
    test ('Check spreadsheet headers', async()=>{
        await curators.spreadsheetListAssertion();
    });
    test ('Increase pagination', async()=>{
        await curators.pagination();
    });
})