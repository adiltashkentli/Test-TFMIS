// @ts-check
const { test, expect } = require('@playwright/test');
const Recipients = require('../../../pages/BudExecRecipients');
const Dashboard = require('../../../../pages/Dashboard');

test.describe('Категория: Получатели (Поставщики)', () => {
    let recipients;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        recipients = new Recipients(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await recipients.navigateToPage();
    });
    test('Check tab header', async () => {
        await recipients.checkTabHeader();
    });
    test('Get relative list', async () => {
        await recipients.inputDataToRelativeList();
    });
    test('Get spreadsheet list', async () => {
        await recipients.spreadsheetListAssertion();
    });    
    test('Add button modal functionality', async () => {
        await recipients.addButton();
    });
    test('Increase pagination', async () => {
        await recipients.pagination();
    });
    test ('Assert delete button', async()=>{
        await recipients.deleteButtonAssert();
    });

})