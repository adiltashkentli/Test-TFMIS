// @ts-check
const { test, expect } = require('@playwright/test');
const BindingBZmentor = require('../../../pages/BudExecBindingBZmentor');
const Dashboard = require('../../../../pages/Dashboard');

test.describe('Категория: Привязка БЗ (куратор)', () => {
    let bindingBZmentor;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        bindingBZmentor = new BindingBZmentor(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await bindingBZmentor.navigateToPage();
    });
    test('Check tab header', async () => {
        await bindingBZmentor.checkTabHeader();
    });
    test('Get relative data', async () => {
        await bindingBZmentor.getRelativeList();
    });
    test ('Check spreadsheet headers', async()=>{
        await bindingBZmentor.spreadsheetListAssertion();
    });
    test ('Increase pagination', async()=>{
        await bindingBZmentor.pagination();
    });
})