// @ts-check
const { test, expect } = require('@playwright/test');
const Documents = require('../../../pages/BudExecDocuments');
const Dashboard = require('../../../pages/Dashboard');

test.describe('Категория: Документы', () => {
    let documents;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        documents = new Documents(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await documents.navigateToPage();
    });
    test('Check tab header', async () => {
        await documents.checkTabHeader();
    });
    test('Get relative list', async () => {
        await documents.getRelativeList();
    });

    test('Check spreadsheet headings', async () => {
        await documents.spreadsheetListAssertion();
    });
    test('Add modal functionality', async () => {
        await documents.addModalFunc();
    });
    test('Edit data functionality', async () => {
        await documents.editData();
    });    
    test('Increade pagination', async () => {
        await documents.pagination();
    }); 
})